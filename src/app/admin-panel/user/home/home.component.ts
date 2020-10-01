import { Component, OnInit } from '@angular/core';
import { UserVM } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: UserVM[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: UserVM[])=>{
      console.log(data);
      this.users = data;
    })
  }

}
