import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserUnitId } from '../my-unit/unit'

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  readonly BaseURI = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

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
      return this.http.post(this.BaseURI+'/accounts', body, this.httpOptions );
  }

  changePassword(data){
    return this.http.post(this.BaseURI+'/UserProfile/changePass/'+this.getUserId(), data, this.httpOptions);
  }

  login(formData){
    return this.http.post(this.BaseURI+'/auth/login', JSON.stringify(formData), this.httpOptions);
  }

  getUserProfile(){
    return this.http.get(this.BaseURI+'/UserProfile');
  }
  getUserUnit(): Observable<any>{
    return this.http.get<any>(this.BaseURI+'/UserProfile/Unit');
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

  isAdmin(): boolean{
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    if(userRole == "Admin"){
      return true;
    }
    return false;
  }
  getUserId(): string{
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return payLoad.UserID;

  }
}

