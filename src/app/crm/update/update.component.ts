import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() cust1 : any;
  @Input() id1:any = -1;
  @Input() name:any;
  @Input() contact : any;
  @Input() email : any;
  updateMessage : string = '';
  


  cust = [];


  constructor(private svc:CustomerService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id1 = this._Activatedroute.snapshot.paramMap.get("id");
    this.cust1 = this.svc.getById(this.id1);
    this.name = this.cust1.name;
    this.contact = this.cust1.contactnumber;
    this.email = this.cust1.email;
    console.log(this.cust1);
  }

  updateRecord(id:any)
  {
    this.cust1.name = this.name;
    this.cust1.contactnumber = this.contact;
    this.cust1.email = this.email;
    this.svc.update(this.cust1);
    this.updateMessage = "Record Updated Successfully";

  }

}
