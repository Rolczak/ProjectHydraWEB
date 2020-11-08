import { Component, OnInit } from '@angular/core';
import { ClassesVM } from '../classes';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  classes: ClassesVM[] = [];
  constructor(private classesService: ClassesService) { }

  ngOnInit(): void {
    this.classesService.getAll().subscribe((data: ClassesVM[])=>{
      console.log(data);
      this.classes = data;
    });
  }

}
