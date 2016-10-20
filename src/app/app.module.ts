// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';

import { AppRoutes } from './app.routes';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    AppRoutes
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
