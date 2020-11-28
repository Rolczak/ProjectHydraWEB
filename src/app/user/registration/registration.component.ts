import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  errors: string[];

  constructor(public service: UserAuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.formModel.reset();
    this.errors = [];
  }

  onSubmit() {
    this.errors = [];
    this.service.register().subscribe(
      res => {
        console.log(res);
        this.router.navigate(["../login"],{relativeTo: this.route});},
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
      }
    );
  }
}
