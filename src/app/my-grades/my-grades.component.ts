import { Component, OnInit } from '@angular/core';
import { GradesService } from './grades.service';
import {GradeVM} from './grade';

@Component({
  selector: 'app-my-grades',
  templateUrl: './my-grades.component.html',
  styles: [
  ]
})
export class MyGradesComponent implements OnInit {

  grades: GradeVM[];

  constructor(private gradesService: GradesService) { }

  ngOnInit(): void {
    this.gradesService.getMyGrades().subscribe(
      (data: GradeVM[])=>{
        console.log(data);
        this.grades = data;
      },
      err=>{console.log(err)}
    );
  }

}
