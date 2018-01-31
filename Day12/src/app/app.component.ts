import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentCounterValue: number;  

  displayChange(currentCount: number){    
    this.componentCounterValue = currentCount;
  }
}
