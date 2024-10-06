import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerdashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent }, // Default route
    { path: 'register', component: CustomerRegisterComponent },
    { path: 'login', component: CustomerLoginComponent },
    { path: 'dashboard', component: CustomerdashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

