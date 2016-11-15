import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { UpdateComponent } from './update/update.component';
import { PersonComponent } from "./person/person.component";

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'edit/:id', component: UpdateComponent},
  {path: 'person/:id', component: PersonComponent}
];

export const AppRoutes = RouterModule.forRoot(ROUTES,{useHash: true});
