// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MATERIAL DESIGN MODULES
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PeopleAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    PeopleAppComponent
  ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }