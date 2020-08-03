import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomer(customerId: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`http://localhost:63235/customer/${customerId}`);
  }

  getCustomers(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`http://localhost:63235/customer/all`);
  }
  
  createCustomer(newCustomer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>('http://localhost:63235/customer', newCustomer);
  }
}
