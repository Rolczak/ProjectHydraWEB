import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formModel={
    UserName : '',
    Password : ''
  };

  constructor(private service:UserAuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.router.navigateByUrl('/dashboard/home');
    }
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/dashboard/home');
      },
      err =>{
        if(err.status == 400){
          this.toastr.error('Incorrect username or password.','Authentication failes');
        }
        else{
          console.log(err);
        }
      }
    );
  }

}
