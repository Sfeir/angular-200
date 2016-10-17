// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';


import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    PeopleAppComponent,
    HomeComponent,
    PersonComponent
  ],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
