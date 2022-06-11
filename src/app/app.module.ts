import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.modulo';
import { DbzModule } from './dbz/dbz.module';
import { AgregarComponent } from './agregar/agregar/agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
