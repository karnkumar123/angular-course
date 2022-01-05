import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponentComponent } from './root-component/root-component.component';
import { CockpitComponent } from './root-component/cockpit/cockpit.component';
import { ServerElementComponent } from './root-component/server-element/server-element.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgContentComponent } from './root-component/ng-content/ng-content.component';



@NgModule({
  declarations: [
    RootComponentComponent,
    CockpitComponent,
    ServerElementComponent,
    NgContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  bootstrap: [RootComponentComponent]
})
export class AddServerAppModule { }
