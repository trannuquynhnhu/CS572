import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CheckUrlValidService } from './check-url-valid.service';
import { DbService } from './db.service';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage.component';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { ErrorComponent } from './error.component';

const MY_ROUTES: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomepageComponent},  
  {path: "students", component: StudentsComponent},
  {path: "error", component: ErrorComponent},
  {path: "profile", redirectTo: "error", pathMatch: "full"},
  {path: "profile/:id", component: ProfileComponent, canActivate: [CheckUrlValidService]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DbService, CheckUrlValidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
