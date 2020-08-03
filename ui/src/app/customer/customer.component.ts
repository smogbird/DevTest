import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';
import { LookupService } from '../services/lookup.service';
import { CustomerType } from '../models/customer-type.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {

  customerTypes: CustomerType[];
  customers: Customer[];
  newCustomer: Customer = {
    customerId: null,
    customerName: '',
    customerType: ''
  };
  subscription = new Subscription();

  constructor(private customerService: CustomerService, private lookupDataService: LookupService) { }

  ngOnInit() {
    this.subscription.add(
      this.lookupDataService.customerTypes.subscribe((customerTypesData) => this.customerTypes = customerTypesData)
    );
    this.subscription.add(
      this.customerService.getCustomers().subscribe((customers) => this.customers = customers)
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  createCustomer(customerForm: NgForm){
    if (customerForm.invalid) {
      alert('customerForm is not valid');
      return;
    } 

    this.customerService.createCustomer(this.newCustomer).subscribe((customer) => {
        if(!customer){
         alert('Error on adding customer');
        }
        this.customers.unshift(customer);
      }, (error) => {
        alert(`Error on adding customer - ${JSON.stringify(error)}`);
      });    
  }

}
