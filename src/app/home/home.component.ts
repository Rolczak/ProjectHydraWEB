import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private service: UserService) { }

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
