import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // detail:any = [
  //   {
  //     email : "aishwarya@gmail.com",
  //     password : "1234"
  //   }
  // ]
  // temail:string = "a@gmail.com";
  // tpassword:string = "1234";

  validate(email:string,password:string):boolean
  {
    let status:boolean=false;
    if(email == "aa@gmail.com" && password == "11")
      {
        status = true;
      }
      return status;
  }
}
