import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, CreateComponent],
  imports: [
    CommonModule,
    GradesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class GradesModule { }
