import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesConceptsComponent } from './observables-concepts/observables-concepts.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ObservablesConceptsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [ObservablesConceptsComponent]
})
export class ObservablesModule { }
