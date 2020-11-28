import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassesRoutingModule } from './classes-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [HomeComponent, CreateComponent],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClassesModule { }
