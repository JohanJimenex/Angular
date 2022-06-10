import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.modulo';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
