import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RankService } from '../rank.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  rankForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private rankService: RankService) { }

  ngOnInit(): void {
    this.rankForm = this.fb.group({
      name:[''],
      hierarchy: ['']
    })
  }

  onSubmit(){
    this.rankService.create(this.rankForm.value).subscribe(res => {
      console.log('Rank created');
      this.router.navigateByUrl('/dashboard/admin/rank/home');
    })
  }
}
