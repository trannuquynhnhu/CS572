import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DbService } from './db.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CheckUrlValidService implements CanActivate {

  constructor(private db: DbService, private route: Router) { }
  canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean> | boolean {
      
      if(this.db.findStudentById(activatedRoute.params.id)){     
        return true;
      }
      else{
        //console.log(this.db.findStudentById(this.id));
        this.route.navigate(["error"]);
        return false;
      } 
    }; 
       
  }

