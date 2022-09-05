import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /*flower=[
  {
    id:56,
    title:"Lily",
    imageurl:"/assets/images/flower.jpg",
    description:"Valentine Flower",
    likes:1000
  },
  {
    id:57,
    title:"Aster",
    imageurl:"/assets/images/flower2.jpg",
    description:"Valentine Flower",
    likes:2000,
    unitprice:24
  },
  {
    id:58,
    title:"Rose",
    imageurl:"/assets/images/flower3.webp",
    description:"Valentine Flower",
    likes:2500,
    unitprice:67
  },
  {
    id:59,
    title:"Rose",
    imageurl:"/assets/images/flower4.jpg",
    description:"Valentine Flower",
    unitprice:45
  }
];*/

flower:any;
  constructor(private svc:ProductService) { 
   
  }

  ngOnInit(): void {
    this.flower = this.svc.getAll();
  }

}
