import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  constructor() { }

  private data: {_id: string, name: string, stuID: string, email: string}[] = [
    {_id:"1", name: "Quynh Nhu", stuID: "12345", email: "quynhnhu@mum.edu" },
    {_id:"2", name: "Thien An", stuID: "23456", email: "thienan@mum.edu"},
    {_id:"3", name: "Ky Nguyen", stuID: "34567", email: "kynguyen@mum.edu"}
  ];

  getData(){
    return this.data;
  }

  findStudentById(id){
    for(let stu of this.data){
      if(stu._id == id){
        return true;
      }
    }
    return false;
  }
  

}
