// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent }  from './home/home.component';

@NgModule({
  declarations: [
    App,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [App]
})
export class AppModule {}