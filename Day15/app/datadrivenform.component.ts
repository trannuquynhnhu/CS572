import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyhttpService } from './myhttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'datadrivenform',
  templateUrl: './datadrivenform.component.html',
  styleUrls: ['./datadrivenform.component.css'],
  
})
export class DatadrivenformComponent implements OnInit {
  myForm: FormGroup;
  data: Object;
  
  constructor(private fb: FormBuilder, private service: MyhttpService, private route: Router) {
    this.myForm = fb.group({
      "user": fb.group({
        "name": ["", Validators.required],
        "email": ["", Validators.required],
      }),      
      "post": ["", Validators.minLength(10)]
    })
   }

  ngOnInit() {
  } 

  getPosts(){
    this.service.getPosts().subscribe(
      res => {
        if(res instanceof Array){
          let result: string;
          for(let post of res){
            result += post["body"] + "\n";
          }          
          this.myForm.patchValue({
            post: result
          })
        }        
      }
    )
  }

  getUser(){
    this.service.getData().subscribe(
      res =>{
        this.data = res;                    
        this.myForm.controls["user"].setValue({
          name: this.data["name"],
          email: this.data["email"]
        });            
      }
  );
  }

  getData(){
    this.getUser();
    this.getPosts();
  }

  onSubmit(){    
    console.log(this.myForm.controls["user"].value);
    this.route.navigate(["thankyou"]);
  }
  
}
