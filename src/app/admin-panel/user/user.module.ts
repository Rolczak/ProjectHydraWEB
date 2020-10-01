import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UpdateRankComponent } from './update-rank/update-rank.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UpdateRankComponent, HomeComponent, DetailsComponent, UpdateComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
