import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
    <p>Student Id: {{student.stuID}}</p>
    <p>Student Name: {{student.name}}</p>
    <p>Student Email: {{student.email}}</p>    
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  id: string;
  student: {_id: string, name: string, stuID: string, email: string};

  constructor(private dbService: DbService, private route: ActivatedRoute) { 

    route.params.subscribe(params => {this.id = params["id"]});
    for (let stud of this.dbService.getData()){
      if(stud._id == this.id){
        this.student = stud;
      }
    }
  }

  ngOnInit() {
  }

}
