import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `  
    <div style="margin-bottom:10px">
      Input counter: {{counter}}    
    </div>  
    <div>      
      <button (click)="minus()">-</button>
      <label>{{counterValue}}</label>
      <button (click)="plus()">+</button>
    </div>    
  `,
  styles: [],
  inputs: ['counter'],
  outputs: ['counterChange']
})
export class CounterComponent implements OnInit {

  counter: number;
  counterValue: number;
  counterChange: EventEmitter<number>;

  constructor() { 
    this.counterValue = 5;
    this.counterChange = new EventEmitter();
  }

  minus(){    
    this.counterValue = this.counterValue - 1; 
    this.counterChange.emit(this.counterValue);  
    this.counter = this.counterValue;    
  }

  plus(){    
    this.counterValue = this.counterValue + 1; 
    this.counterChange.emit(this.counterValue);
    this.counter = this.counterValue;   
    
  }

  onCounterChange(): void{
    this.counterChange.emit(this.counterValue);
    this.counter = this.counterValue;
  }

  ngOnInit() {
    this.counterValue = this.counter;
  }

}
