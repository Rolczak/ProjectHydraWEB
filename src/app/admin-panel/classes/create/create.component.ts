import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Unit } from '../../unit/unit';
import { UnitService } from '../../unit/unit.service';
import { UserVM } from '../../user/user';
import { UserService } from '../../user/user.service';
import { Classes } from "../classes";
import { ClassesService } from '../classes.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  classForm: FormGroup;
  units: Unit[] = [];
  users: UserVM[] = [];

  constructor(private classesService: ClassesService, private userService: UserService,
    private unitService: UnitService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getForSelect().subscribe(data => this.users = data);
    this.unitService.getAll().subscribe(data => this.units = data);
    this.classForm = this.fb.group({
        teacherId:[''],
        unitId:[''],
        topic:[''],
        place:[''],
        date:[''],
        time:[''],
        comment:['']
    });
  }

  onSubmit(){
    this.classesService.create(this.classForm.value).subscribe(res=>{
      console.log("Class created");
      this.router.navigateByUrl('/dashboard/admin/classes/home');
    });
  }

}
