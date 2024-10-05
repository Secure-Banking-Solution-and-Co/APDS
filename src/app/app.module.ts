import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
//import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    //CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
