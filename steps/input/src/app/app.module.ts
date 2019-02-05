// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// MATERIAL DESIGN MODULES
import {
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PeopleComponent } from './people';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    APP_ROUTES
  ],
  declarations: [AppComponent, HomeComponent, PeopleComponent],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
