import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  /*@Input() id : number = 0;
  @Input() public title:string|undefined;
  @Input() public description:string|undefined;
  @Input() public unitprice:number=0;
  @Input() public imageurl:string|undefined;
  @Input() public likes:number=0;*/

  @Input() product : any;


  constructor() { 
  /*this.id =12;
  this.title= "Gerbera";
  this.description="Wedding Flower";
  this.unitprice=12;
  this.imageurl="/assets/images/flower.jpg";
  this.likes=5000;*/
  }

  onUpdate(eventargument:any) :void{
    this.product.likes = eventargument.count;

  }

  ngOnInit(): void {
  }

}
