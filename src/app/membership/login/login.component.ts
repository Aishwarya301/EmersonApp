import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {



  constructor(private svc : AuthService) {

   }

  //component Life Cycle Functions
   email:string = "";
   password:string = "";
   result:string = "";

  ngOnInit(): void {
    
  }

  ngOnDestroy() : void{

  }

  onValidate() : void{
    let status : boolean = false;
    status = this.svc.validate(this.email,this.password);
    if(status){
      this.result = "Welcome";
    }
    else{
      this.result = "Invalid User";
    }
  }

}
