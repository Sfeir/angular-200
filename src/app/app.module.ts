// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';

import { APP_ROUTES } from './app.routes';

import { PeopleAppComponent } from './app.component';
import { PersonComponent } from './person/index';
import { PeopleComponent } from "./people/index";
import { CardComponent, FormComponent, PeopleService } from "./shared/index";
import { NaPipe } from './shared/na-pipe/na.pipe';
import { SfeirBadgeDirective } from './shared/badge/sfeir-badge.directive';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    APP_ROUTES
  ],
  declarations: [
    PeopleAppComponent,
    HomeComponent,
    PersonComponent,
    PeopleComponent,
    CardComponent,
    FormComponent,
    UpdateComponent,
    NaPipe,
    SfeirBadgeDirective,
    NaPipe,
    SfeirBadgeDirective,
    HomeComponent,
    UpdateComponent
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
