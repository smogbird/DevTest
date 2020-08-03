import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Subscription, EMPTY } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {

  customer:Customer;
  customerId: number;
  errorMessage: string;  
  subscription: Subscription = new Subscription();

  constructor(private customerServcie: CustomerService, private activatedRoute: ActivatedRoute) { 
    this.customerId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    if(!this.customerId)
    {
      this.errorMessage = "Please enter a valid customer id";
      return;
    }
    
    this.customerServcie.getCustomer(this.customerId).subscribe((customerData: Customer) => {
        if(!customerData){
          this.errorMessage = "Customer data is not available";
          return EMPTY;
        }
        this.customer = customerData;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
