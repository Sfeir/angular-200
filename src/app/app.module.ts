// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';

import { RoutesModule } from './routes.config';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { PeopleComponent } from './people/people.component';
import { CardComponent } from './shared/card/card.component';
import { FormComponent } from './shared/form/form.component';
import { PeopleService } from './shared/people-service/people.service';
import { UpdateComponent } from './update/update.component';
import { NaPipe } from './shared/na-pipe/na.pipe';
import { SfeirBadgeDirective } from './shared/badge/sfeir-badge.directive';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RoutesModule
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
    SfeirBadgeDirective
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
