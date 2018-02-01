import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  template: `
    <h1 style="text-align: center;">
      Welcome to MUM University!!!!!!
    </h1>
  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
