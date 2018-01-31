import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
  @ViewChild("colorElement") myComponent;
  
  changeColorValue(color){
    console.log(color);
    this.myComponent.nativeElement.style.color = color;
  }
}
