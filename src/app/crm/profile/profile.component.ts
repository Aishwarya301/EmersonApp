import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
@Input() cust1 : any;
@Input() id1:any = -1;
removeMessage : string = '';
index : any;


  constructor(private svc:CustomerService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id1 = this._Activatedroute.snapshot.paramMap.get("id");
    this.cust1 = this.svc.getById(this.id1);
  }
}
