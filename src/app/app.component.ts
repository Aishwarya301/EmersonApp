import { Component } from '@angular/core';

//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data members
  title = 'EmersonApp';
  name="Microsoft India pvt Ltd.";
  city="Mumbai";
  fullname="Priyanka ? ?";

  //member functions
  changename() {
    this.fullname = "Priyanka Malwadkar";
  }

  constructor(){

  }
}

