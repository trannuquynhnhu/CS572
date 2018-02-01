import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';    
}
