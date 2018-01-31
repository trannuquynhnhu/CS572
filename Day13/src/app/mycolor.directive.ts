import { Directive, Input, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  colors: Array<string>;
  currentColor: string;
  randomNumber: number;
  @Output() exposeColor: EventEmitter<string>;

  constructor(private e: ElementRef) { 
    this.colors = ["red", "green", "purple", "pink", "yellow", "orange", "blue"];
    this.exposeColor = new EventEmitter();
    this.changeColor();
  }

  @HostListener("click") changeColor(){
    this.randomNumber = Math.floor(Math.random() * Math.floor(7));
    this.currentColor = this.colors[this.randomNumber];    
    //this.e.nativeElement.style.color = this.currentColor;
    this.exposeColor.emit(this.currentColor);
  }
}
