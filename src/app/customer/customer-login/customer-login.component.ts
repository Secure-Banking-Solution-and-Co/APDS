import { TmplAstBoundDeferredTrigger } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [],
  templateUrl: './customer-login.component.html',
  styleUrl: ['./customer-login.component.css']
})
export class CustomerLoginComponent {


  // onLogin is responsible for input validation. 
  // If there is an error, the customer is alerted
  // the logic is the acc number gets compared to the password
  // if its unmatched, something is wrong
  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) {
      alert('Please correct the errors before submitting.');
      return;
    }

    // Extract account number and password values
    const accountNumber = loginForm.value.accNo;
    const password = loginForm.value.password;

    // Confirm inputs match
    if (loginForm.value.accNo !== loginForm.value.confirmAccNo || loginForm.value.password !== loginForm.value.confirmPassword) {
      alert('Account Number or Password does not match.');
      return;
    }

    // Proceed with login (for now, we'll just alert the details)
    alert(`Account Number: ${accountNumber}\nPassword: ${password}`);
  }
}
