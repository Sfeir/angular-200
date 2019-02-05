// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { AppComponent } from './app.component';
import { HomeComponent } from './home';

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
    MatListModule
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
