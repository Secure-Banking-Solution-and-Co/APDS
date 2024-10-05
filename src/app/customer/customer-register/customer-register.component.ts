import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [],
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'] 
})

export class CustomerRegisterComponent implements OnInit {

  // method that is called by the button click in the form
constructor(){}

ngOnInit(): void {

}

 // Method called by the button click in the form
 onaddnewcustomer(registerform: NgForm) {
  if (registerform.invalid) {
    alert('Invalid');
    return;
  }

  // Access the form fields using registerform.value.<fieldName>
  alert(`ID: ${registerform.value.enteredIDPass} | Name: ${registerform.value.enteredName}`);
}
}
