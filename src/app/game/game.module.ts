import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  bootstrap: [GameControlComponent]
})
export class GameModule { }
