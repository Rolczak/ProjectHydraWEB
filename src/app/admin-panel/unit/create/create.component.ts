import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserVM } from '../../user/user';
import { UserService } from '../../user/user.service';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  users: UserVM[] = [];
  units: Unit[] = [];
  unitForm: FormGroup;
  constructor(private userService: UserService,
     private unitService: UnitService,
     private fb: FormBuilder,
     private router: Router) { }

  ngOnInit(): void {
    this.userService.getForSelect().subscribe(data => this.users = data);
    this.unitService.getAll().subscribe(data => this.units = data);
    this.unitForm = this.fb.group({
        name:[''],
        commanderId:[''],
        deputyCommanderId:[''],
        parentId:['']
    });
  }

  onSubmit(){
      this.unitService.create(this.unitForm.getRawValue()).subscribe(res=>{
        console.log("unit added");
        this.router.navigateByUrl('/dashboard/admin/unit/home');
      });
  }

}
