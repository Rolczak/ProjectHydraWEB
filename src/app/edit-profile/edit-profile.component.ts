import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UnitService } from '../admin-panel/unit/unit.service';
import { UserDetails } from '../admin-panel/user/user';
import { UserService } from '../admin-panel/user/user.service';
import { UserAuthService } from '../shared/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styles: [
  ]
})
export class EditProfileComponent implements OnInit {
  userForm: FormGroup;
  user: Observable<UserDetails>;
  rankName: string;
  rankId: number;
  date:Date = new Date();
  constructor(private route:ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.user = this.userService.getById(this.userAuthService.getUserId()).pipe(tap(user => this.rankName = user.rankName, user => this.rankId = user.rankId)).pipe(tap(user => this.userForm.patchValue(user)));
    this.userForm = this.fb.group({
      id:[{value: '', disabled: true }],
      firstName:[''],
      lastName:[''],
      birthday:[new Date()],
      username:[''],
      phoneNumber:[''],
      unitId:[{value:'',disabled: true}],
    });
  }
  onSubmit(){
    console.log(this.userForm.getRawValue());
    this.userService.editProfile(this.userAuthService.getUserId(), this.userForm.getRawValue()).subscribe(res =>{
        console.log("user edited");
        this.router.navigateByUrl('/dashboard/home');
    });
  }
}
