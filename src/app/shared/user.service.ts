import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  readonly BaseURI = 'https://localhost:44305/api';

  formModel = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(7)]],
      ConfirmPassword: ['', Validators.required],
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    let confirmPasswordCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors=null
    if (confirmPasswordCtrl.errors == null || 'passwordMissmatch' in confirmPasswordCtrl.errors) {
      if (fb.get('Password').value != confirmPasswordCtrl.value) {
        confirmPasswordCtrl.setErrors({ passwordMismatch: true });
      }
      else {
        confirmPasswordCtrl.setErrors(null);
      }
    }
  }
  register(){
      var body={
        email: this.formModel.value.Email,
        firstName: this.formModel.value.FirstName,
        lastName: this.formModel.value.LastName,
        password: this.formModel.value.Passwords.Password,
      };
      return this.http.post(this.BaseURI+'/accounts', body);
  }

  login(formData){
    return this.http.post(this.BaseURI+'/auth/login', formData);
  }

  getUserProfile(){
    return this.http.get(this.BaseURI+'/UserProfile');
  }

  roleMatch(allowedRoles): boolean{
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
        if(userRole == element){
          isMatch = true;
          return false;
        }
    });
    return isMatch;
  }
}

