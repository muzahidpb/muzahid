import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttamdanceComponent } from './attamdance/attamdance.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AttamdanceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    AttamdanceComponent
  ]
})
export class BizworkModule { }
