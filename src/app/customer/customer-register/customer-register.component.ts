import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule
    FormsModule, // Add FormsModule for ngModel
  ],
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'] 
})
export class CustomerRegisterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  // Method called by the form submission
  onAddNewCustomer(form: NgForm) {
    if (form.valid) {
      const customerData = {
        fullName: form.value.fname,
        idPassNo: form.value.idPassNo,
        accNo: form.value.accNo,
        uniquePassword: form.value.uniquePassword,
        confirmPassword: form.value.confirmPassword
      };
      console.log('Customer Data:', customerData);
    } else {
      console.log('Form is invalid');
    }
  }
}
