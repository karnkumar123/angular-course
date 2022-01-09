import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './directive/highlight.directive';
import { BetterDirectiveDirective } from './directive/better-directive.directive';
import { SimpeHostListenerDirective } from './directive/simpe-host-listener.directive';
import { NgIfKaUltaDirective } from './directive/ng-if-ka-ulta.directive';



@NgModule({
  declarations: [
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HighlightDirective,
    BetterDirectiveDirective,
    SimpeHostListenerDirective,
    NgIfKaUltaDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  bootstrap: [GameControlComponent]
})
export class GameModule { }
