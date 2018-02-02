import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DatadrivenformComponent } from './datadrivenform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyhttpService } from './myhttp.service';
import { ThankyouComponent } from './thankyou.component';

const MY_ROUTES: Routes= [
  {path: "", component: DatadrivenformComponent},
  {path: "thankyou", component: ThankyouComponent}  
]


@NgModule({
  declarations: [
    AppComponent,
    DatadrivenformComponent,
    ThankyouComponent          
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(MY_ROUTES)   
  ],
  providers: [MyhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
