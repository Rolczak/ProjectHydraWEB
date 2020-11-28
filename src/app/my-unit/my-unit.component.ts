import { Component, OnInit } from '@angular/core';
import { UnitsService } from './units.service';
import { UnitDetails } from './unit';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-unit',
  templateUrl: './my-unit.component.html',
  styles: [
  ]
})
export class MyUnitComponent implements OnInit {

  unit: Observable<UnitDetails>;
  constructor(private unitService: UnitsService) { }

  ngOnInit(): void {
    this.unit = this.unitService.getMyUnit();
  }

}
