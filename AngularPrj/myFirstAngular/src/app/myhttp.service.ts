import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyhttpService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("http://jsonplaceholder.typicode.com/users/1");            
  }

  getPosts(){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
  }

}
