import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API="http://localhost:8080";
  public registerCustomer(customerData: any)
  {
    return this.http.post(`${this.API}/customers` , customerData);
  }

  public getCustomers(){
    return this.http.get(`${this.API}/customers`);
  }

  public deleteCustomer(customerId:any){
    return this.http.delete(`${this.API}/customers/${customerId}`);
  }

  public updateCustomer(customer: any){
    return this.http.put(`${this.API}/customers/${customer.cid}`, customer);
  }
  constructor(private http: HttpClient) { }
}
