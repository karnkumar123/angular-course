import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { UsersComponent } from './app/users/users.component';
import { ServersComponent } from './app/servers/servers.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingConceptsRouting } from './routing-concepts-routing.module';
import { UserComponent } from './app/users/user/user.component';
import { EditServerComponent } from './app/servers/edit-server/edit-server.component';
import { ServerComponent } from './app/servers/server/server.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ServerService } from './app/services/server.service';
import { AuthService } from './app/services/auth.service';
import { AuthGuard } from './app/services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { ServerResolver } from './app/services/server-resolver.service';
import { CanDeactivateGuard } from './app/services/can-deactivate-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    RoutingConceptsRouting,
    FormsModule
  ],
  providers: [ServerService, AuthService, AuthGuard, ServerResolver, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class RoutingConceptsModule { }
