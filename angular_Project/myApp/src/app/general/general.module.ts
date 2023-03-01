import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';


@NgModule({
  declarations: [
    AboutComponent,
    FormComponent,
    BasicFormComponent,
    FormArrayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [
    AboutComponent,
    FormComponent,
    BasicFormComponent
  ]
})
export class GeneralModule { }
