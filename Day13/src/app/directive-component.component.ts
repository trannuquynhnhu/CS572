import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-component',
  template: `
    <p>
      1) Component directive: List of favorite fruits
    </p>
    <ul>
      <li *ngFor="let item of myArray">{{item}}</li>      
    </ul>
  `,
  styles: [],
  inputs: ['myArray']
})
export class DirectiveComponentComponent implements OnInit {
  myArray: Array<string>;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
