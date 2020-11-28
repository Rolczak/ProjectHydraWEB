import { Component, OnInit } from '@angular/core';
import { Grades, GradesVM } from '../grades';
import { GradesService } from '../grades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  grades: Grades[] = [];
  constructor(private gradesService: GradesService) { }

  ngOnInit(): void {
    this.gradesService.getAll().subscribe((data: Grades[])=>{
      console.log(data);
      this.grades = data;
    })
  }

}
