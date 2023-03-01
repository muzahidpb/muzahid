import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiTestComponent } from './api/api-test/api-test.component';
import { AboutComponent } from './general/about/about.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './general/form/form.component';
import { BasicFormComponent } from './general/basic-form/basic-form.component';
import { ApiPostComponent } from './api/api-post/api-post.component';
import { ApieditComponent } from './api/apiedit/apiedit.component';
import { FormArrayComponent } from './general/form-array/form-array.component';
import { AttamdanceComponent } from './bizwork/attamdance/attamdance.component';

const routes: Routes = [
  {
    component : ApiTestComponent,
    path : "api"
  },
  {
    component : AboutComponent,
    path : "about"
  },
  {
    component : LoginComponent,
    path : ""
  },
  {
    component : FormComponent,
    path : "form"
  },
  {
    component : BasicFormComponent,
    path : "basicform"
  },
  {
    component :ApiPostComponent,
    path : "apipostform"
  },
  {
    component :ApieditComponent,
    path : "editdata"
  },
  {
    component : FormArrayComponent,
    path : "formarray"
  },
  {
    component : AttamdanceComponent,
    path : "attandance"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
