import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Input() count:number | undefined;

  //Event Definition and event triggering logic
  sub()
  {
    if(this.count != undefined){
      this.count--;
      this.update.emit({count:this.count});
    }
  }

  add()
  {
    if(this.count != undefined){
      this.count++;
      this.update.emit({count:this.count});
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
