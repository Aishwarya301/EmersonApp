import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
@Input() cust1 : any;
@Input() id1:any = -1;
removeMessage : string = '';
index : any;
cust2:any;
i:any;
  constructor(private svc:CustomerService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
   
  }  

  remove()
  {
    this.id1 = this._Activatedroute.snapshot.paramMap.get("id");
    this.svc.remove(this.id1);
    this.removeMessage = "Record Removed Successfully";
  }
}
