import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AlertModalComponent } from './login/alert-modal/alert-modal.component';
import { PlaceholderDirective } from './placeholder.directive';



@NgModule({
  declarations: [
    LoginComponent,
    AlertModalComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [LoginComponent],
  entryComponents: [AlertModalComponent] // it is not needed in angular 9+ (because it has different rendering engine i.e, ivy)
})
export class DynamicComponentsModule { }
