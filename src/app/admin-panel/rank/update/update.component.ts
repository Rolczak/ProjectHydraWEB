import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Rank } from '../rank';
import { RankService } from '../rank.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: number;
  rankForm: FormGroup;
  rank: Observable<Rank>;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private rankService: RankService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['rankId'];
    });
    this.rank = this.rankService.getById(this.id).pipe(tap(rank => this.rankForm.patchValue(rank)));
    this.rankForm = this.fb.group({
      id:[''],
      name:[''],
      hierarchy: ['']
    });
  }

  onSubmit(){
    console.log(this.rankForm.value);
    this.rankService.update(this.id, this.rankForm.value).subscribe(res =>{
      console.log("Rank edited");
      this.router.navigateByUrl('/dashboard/admin/rank/home');
    })
  }
}
