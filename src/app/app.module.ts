import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { FormsModule } from '@angular/forms';
import { CustomerdashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    CustomerdashboardComponent
    //CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
