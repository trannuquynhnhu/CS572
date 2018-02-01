import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error',
  template: `
    <p>
      The profile you are looking for is invalid!!!!!!!
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
