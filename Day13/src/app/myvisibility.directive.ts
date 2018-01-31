import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myVisibility]'
})
export class MyvisibilityDirective {

  @Input() myVisibility : boolean; 
  //@HostBinding("style.display") myvisibility;

  constructor(public e: ElementRef, public renderer: Renderer) {     
    
  }

  ngOnInit(){ // reached after all bound properties are initilized
    console.log(this.myVisibility);
    if(!this.myVisibility){
      this.renderer.setElementStyle(this.e.nativeElement, "display", "none");
    }
  }

}
