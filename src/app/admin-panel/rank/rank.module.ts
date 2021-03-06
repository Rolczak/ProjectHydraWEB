import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RankRoutingModule } from './rank-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [HomeComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    RankRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RankModule { }
