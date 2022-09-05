import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers = [
    
    {
      "id" : 12,
      name : "Aishwarya Bhoj",
      "contactnumber" : 9080022334,
      "email" : "bhojaish123@gmail.com"
    },
    {
      "id" : 13,
      name : "Priyanka Malwadkar",
      "contactnumber" : 9080022334,
      "email" : "priyanka@gmail.com"
    },
    {
      "id" : 14,
      name : "Sakshi Gaikwad",
      "contactnumber" : 9080022334,
      "email" : "sakshi@gmail.com"
    },
    {
      "id" : 15,
      name : "Sandhya Survase",
      "contactnumber" : 9080022334,
      "email" : "sandhya@gmail.com"
    }


  ]

  constructor() { }

  foundcustomer : any;
  getAll():any
  {
    return this.customers;
  }
  getById(id:number):any{
    this.foundcustomer =this.customers.find((customer)=>(customer.id==id));
    return this.foundcustomer;
  }
  insert(newCustomer:any)
  {
    this.customers.push(newCustomer);
  }
  remove(id:number):any{
    const ri = this.customers.findIndex(customer => {
      return customer.id == id;
    });
    if(ri === -1)
    {
      return false;
    };
    console.log(ri);
    
    return this.customers.splice(ri,1);
  }

  /*remove(id:number):any{

    // FoundCustomer:any;

    let FoundCustomer=this.customers.find((customers)=>(customers.id == id));



    let FoundCustomer1=this.customers.splice(this.customers.findIndex((customers)=>(customers == FoundCustomer)),1);

   }*/

  update(customerToUpdate:any):any{
    const ri = this.customers.findIndex(customer => {
      return customer.id === customerToUpdate.id;

    });
    if(ri === -1)
    {
      return false;
    }
    this.customers.splice(ri,1);
    this.customers.push(customerToUpdate);
  }
}
