import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
