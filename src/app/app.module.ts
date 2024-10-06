import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { FormsModule } from '@angular/forms';
import { CustomerdashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    CustomerdashboardComponent
    //CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
