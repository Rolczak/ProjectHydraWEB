import { Component, OnInit } from '@angular/core';
import { Unit } from "../unit";
import { UnitService } from "../unit.service";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  units: Unit[] = [];

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.unitService.getAll().subscribe((data: Unit[])=>{
      console.log(data);
      this.units = data;
    })
  }

}
