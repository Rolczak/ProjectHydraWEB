import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitRoutingModule } from './unit-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    UnitRoutingModule,
    ReactiveFormsModule
  ]
})
export class UnitModule { }
