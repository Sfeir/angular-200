// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';

import { APP_ROUTES } from './app.routes';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { PersonComponent } from './person/index';
import { PeopleComponent } from "./people/index";
import { CardComponent } from "./shared/index";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    APP_ROUTES
  ],
  declarations: [
    PeopleAppComponent,
    HomeComponent,
    PersonComponent,
    PeopleComponent,
    CardComponent
  ],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
