import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[upperTransform]'
})
export class UpperDirective {

  constructor(private e: ElementRef) { 
    e.nativeElement.style.textTransform = 'uppercase';
  }

}
