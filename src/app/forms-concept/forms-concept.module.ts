import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppFormsComponent } from './app-forms.component';

const formsRoute: Routes = [
  {path:'', redirectTo: 'tdf', pathMatch: 'full'},
  {path: 'tdf', component: TemplateDrivenFormsComponent},
  {path: 'rdf', component: ReactiveFormsComponent}
]


@NgModule({
  declarations: [
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    AppFormsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(formsRoute),
    ReactiveFormsModule
  ],
  bootstrap:  [AppFormsComponent]
})
export class FormsConceptModule { }
