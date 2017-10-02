// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MATERIAL DESIGN MODULES
import {
  MdToolbarModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdCheckboxModule,
  MdRadioModule,
  MdIconModule,
  MdListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



//import { PeopleAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdRadioModule,
    MdIconModule,
    MdListModule
  ],
  declarations: [
    //PeopleAppComponent
  ],
  providers: [ ],
  bootstrap: [
    //PeopleAppComponent
  ]
})
export class AppModule { }
