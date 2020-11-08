import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserVM } from '../../user/user';
import { UserService } from '../../user/user.service';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  id: number;
  unitForm: FormGroup;
  unit: Observable<Unit>;
  users: UserVM[];
  units: Unit[];
  selectedParentUnit: string;
  selectedCommander: string;
  selectedDeputyCommander: string;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private unitService: UnitService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['unitId'];
    });
    this.unit = this.unitService.getById(this.id).pipe(tap(unit => this.selectedParentUnit = unit.parentUnitName)).pipe(tap(unit => this.unitForm.patchValue(unit)));
    this.userService.getForSelect().subscribe(data => this.users = data);
    this.unitService.getAll().subscribe(data => this.units = data);
    this.unitForm = this.fb.group({
      id:[{value: '', disabled: true }],
      name:[''],
      commanderId:[''],
      deputyCommanderId:[''],
      parentId:['']
  });
  }

  onSubmit(){
    this.unitService.update(this.id,this.unitForm.getRawValue()).subscribe(res=>{
      console.log("unit edted");
      this.router.navigateByUrl('/dashboard/admin/unit/home');
    });
}
}
