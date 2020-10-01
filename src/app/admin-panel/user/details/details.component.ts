import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string;
  userDetails: Observable<UserDetails>;
  user: UserDetails;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['userId']
    });
    this.userDetails = this.userService.getById(this.id);
    this.userDetails.subscribe((data: UserDetails)=>{
      this.user = data;
    })
  }

}
