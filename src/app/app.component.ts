import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerdashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    CustomerdashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Secure Banking solutions & Co.';
}


