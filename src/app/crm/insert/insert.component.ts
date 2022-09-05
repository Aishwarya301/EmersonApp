import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  customer: any={};
  cust : any;


  constructor(private svc:CustomerService) { }

  ngOnInit(): void {
  }

  insertRecord()
  {
    
  }
  onSubmitNewCustomer():void{

    console.log(this.customer);
    this.svc.insert(this.customer);
    this.cust = this.svc.getAll();
    console.log(this.cust);
  }

}
