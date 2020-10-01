import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  errors: string[];

  constructor(public service: UserService) {}

  ngOnInit(): void {
    this.service.formModel.reset();
    this.errors = [];
  }

  onSubmit() {
    this.errors = [];
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeded) {
          this.service.formModel.reset();
        } else {
          res.errors.forEach((element) => {
            console.log('test');
          });
        }
      },
      (err) => {
        if (err.status === 400) {
          console.log(err.error.errors);
          let errorData = err.error.errors;
          for(let fieldName in errorData){
            if(errorData.hasOwnProperty(fieldName)){
              this.errors.push(errorData[fieldName]);
            }
          }
        }
      }
    );
  }
}
