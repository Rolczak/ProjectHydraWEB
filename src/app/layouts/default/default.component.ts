import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private router:Router, private service: UserAuthService) { }
  public isMenuCollapsed = false;
  isAdmin: boolean;
  ngOnInit(): void {
      this.isAdmin = this.service.isAdmin();
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
 }
}
