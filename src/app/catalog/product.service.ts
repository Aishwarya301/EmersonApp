import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  flower:any=[
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
      title:"Tulip",
      imageurl:"/assets/images/flower4.webp",
      description:"Valentine Flower",
      likes:2708,
      unitprice:45
    }
  ];

  constructor() { }

  getAll():any
  {
    return this.flower;
  }
}
