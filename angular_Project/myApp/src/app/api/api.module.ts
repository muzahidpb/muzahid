import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTestComponent } from './api-test/api-test.component';
import { ApiPostComponent } from './api-post/api-post.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApieditComponent } from './apiedit/apiedit.component';



@NgModule({
  declarations: [
    ApiTestComponent,
    ApiPostComponent,
    ApieditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
      ApiTestComponent,
      ApiPostComponent,
      ApieditComponent
  ]
})
export class ApiModule { }
