import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api/api.module';
import { GeneralModule } from './general/general.module';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component'
import { BizworkModule } from './bizwork/bizwork.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    BizworkModule,
    // GeneralModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
