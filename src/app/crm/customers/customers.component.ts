import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:any=[];
  status:boolean=true;

  constructor(private svc: CustomerService, private route:Router) { }

  ngOnInit(): void {
    this.customers=this.svc.getAll();
  }

  onShow():any{
    this.status = true;
  }

  onHide():any{
    this.status=false;
  }
  onInsert():any{
    this.route.navigate(['/insert']);
  }

  showDetails():any{
    this.svc.getAll();
  }

}
