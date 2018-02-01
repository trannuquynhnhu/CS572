import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'students',
  template: `
    <ul>
      <li *ngFor="let student of students">
        <a [routerLink]="['/profile',student._id]">{{student.name}}</a>
      </li>
    </ul>
  `,
  styles: [],
  providers: []
})
export class StudentsComponent implements OnInit {

  students: {_id: string, name: string, stuID: string, email: string}[];

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.students = this.dbService.getData();

  }

}
