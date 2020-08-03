import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomerType } from 'src/app/models/customer-type.model';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private customerTypeSource = new BehaviorSubject<CustomerType[]>(null);
  public customerTypes = this.customerTypeSource.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.getCustomerTypesFromApi().subscribe((types: CustomerType[]) => {
      this.customerTypeSource.next(types);
    });
  }

  getCustomerTypesFromApi(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>('http://localhost:63235/customer/types');
  }
}
