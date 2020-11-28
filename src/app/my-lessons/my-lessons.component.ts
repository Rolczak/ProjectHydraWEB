import { Component, OnInit } from '@angular/core';
import { LessonsVM } from './lessons';
import { LessonsService } from './lessons.service'
@Component({
  selector: 'app-my-lessons',
  templateUrl: './my-lessons.component.html',
  styles: [
  ]
})
export class MyLessonsComponent implements OnInit {

  lessons: LessonsVM[];
  nearestLesson: LessonsVM;
  constructor(private lessonService: LessonsService) { }

  ngOnInit(): void {
    this.lessonService.getMyLessons().subscribe(
      (data: LessonsVM[])=>{
      console.log(data);
      this.lessons = data;
    },
    err=>{console.log(err)},
    ()=>{this.getNearestLesson(this.lessons)}
    );
  }

  getNearestLesson(less: LessonsVM[]){
    const today = new Date().getTime();
    let closest = less.reduce((a, b) => {
      const adiff = new Date(a.date).getTime() - today;
      return adiff > 0 && adiff < new Date(b.date).getTime() - today ? a : b;
    });
    console.log(closest);
    if(new Date(closest.date).getTime() < today){
      this.nearestLesson = null
    }else{
      this.nearestLesson = closest;
    }

  }
}
