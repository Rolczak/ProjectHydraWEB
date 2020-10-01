import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RankSelect } from '../../rank/rank';
import { RankService } from '../../rank/rank.service';
import { UserDetails } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: string;
  userForm: FormGroup;
  user: Observable<UserDetails>;
  ranks: RankSelect[];
  rankName: string;

  constructor(private route:ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private rankService: RankService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['userId'];
    });
    this.user = this.userService.getById(this.id).pipe(tap(user => this.rankName = user.rankName)).pipe(tap(user => this.userForm.patchValue(user)));
    this.rankService.getSelectList().subscribe(data => this.ranks = data);
    this.userForm = this.fb.group({
      id:[{value: '', disabled: true }],
      firstName:[''],
      lastName:[''],
      birthday:[new Date()],
      rankId:[''],
      username:[''],
      phoneNumber:['']
    });
  }

  onSubmit(){
    console.log(this.userForm.getRawValue());
    this.userService.update(this.id, this.userForm.getRawValue()).subscribe(res =>{
        console.log("user edited");
        this.router.navigateByUrl('/dashboard/admin/user/home');
    });
  }

}
