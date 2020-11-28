import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails;

  isAdmin: boolean;
  constructor(private service: UserAuthService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
