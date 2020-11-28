import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassesVM } from '../../classes/classes';
import { ClassesService } from '../../classes/classes.service';
import { UserVM } from '../../user/user';
import { UserService } from '../../user/user.service';
import { GradesService } from '../grades.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  gradeForm: FormGroup;
  users: UserVM[] =[];
  lessons: ClassesVM[] = [];

  constructor(
    private gradesService: GradesService,
    private userService: UserService,
    private lessonService: ClassesService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getForSelect().subscribe(data => this.users = data);
    this.lessonService.getAll().subscribe(data => this.lessons = data);
    this.gradeForm = this.fb.group({
      userId:[''],
      gradeNumber:[''],
      lessonId:[''],
      comment:['']
    });
  }

  onSubmit(){
    this.gradesService.create(this.gradeForm.value).subscribe(res=>{
      console.log("Grade created");
      this.router.navigateByUrl('/dashboard/admin/grades/home');
    });
  }

}
