import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { UserAuthService } from '../shared/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styles: [
  ]
})
export class ChangePasswordComponent implements OnInit {

  errors: string[];
  changePassForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authUserService: UserAuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.errors = [];
    this.changePassForm = this.fb.group({
      CurrentPassword:['',[Validators.required, Validators.minLength(7)]],
      Passwords: this.fb.group({
        NewPassword: ['', [Validators.required, Validators.minLength(7)]],
        ConfirmPassword: ['', Validators.required],
      }, { validator: this.comparePasswords })
    });
  }

  comparePasswords(fb: FormGroup) {
    let confirmPasswordCtrl = fb.get('ConfirmPassword');
    if (confirmPasswordCtrl.errors == null || 'passwordMissmatch' in confirmPasswordCtrl.errors) {
      if (fb.get('NewPassword').value != confirmPasswordCtrl.value) {
        confirmPasswordCtrl.setErrors({ passwordMismatch: true });
      }
      else {
        confirmPasswordCtrl.setErrors(null);
      }
    }
  }
  onSubmit() {
    this.errors = [];
    let data ={
      userID: this.authUserService.getUserId(),
      oldPassword: this.changePassForm.value.CurrentPassword,
      newPassword: this.changePassForm.value.Passwords.ConfirmPassword
    };
    this.authUserService.changePassword(data).subscribe(
      res => {
        console.log(res)
        this.router.navigateByUrl('');
        this.toastr.success("Zmieniono pomyślnie hasło");
      },
      err => {
        if (err.status === 400) {
          console.log(err.error.errors);
          let errorData = err.error.errors;
          for(let fieldName in errorData){
            if(errorData.hasOwnProperty(fieldName)){
              this.errors.push(errorData[fieldName]);
            }
          }
        }
      },
    );
  }
}
