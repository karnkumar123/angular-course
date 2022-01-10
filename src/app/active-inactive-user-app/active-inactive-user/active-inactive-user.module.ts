import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentComponent } from './app-component/app-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentAComponent } from './app-component/component-a/component-a.component';
import { ComponentBComponent } from './app-component/component-b/component-b.component';
import { RootComponentComponent } from './root-component/root-component.component';
import { ActiveComponentComponent } from './root-component/active-component/active-component.component';
import { InactiveComponentComponent } from './root-component/inactive-component/inactive-component.component';
import { DataService } from './root-component/data.service';
import { SharedServiceService } from './shared-service.service';



@NgModule({
  declarations: [
    AppComponentComponent,
    ComponentAComponent,
    ComponentBComponent,
    RootComponentComponent,
    ActiveComponentComponent,
    InactiveComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [RootComponentComponent],
  providers: [DataService, SharedServiceService]
})
export class ActiveInactiveUserModule { }
