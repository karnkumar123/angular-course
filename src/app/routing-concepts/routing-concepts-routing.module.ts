import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { EditServerComponent } from "./app/servers/edit-server/edit-server.component";
import { ServerComponent } from "./app/servers/server/server.component";
import { ServersComponent } from "./app/servers/servers.component";
import { AuthGuard } from "./app/services/auth-guard.service";
import { CanDeactivateGuard } from "./app/services/can-deactivate-guard.guard";
import { ServerResolver } from "./app/services/server-resolver.service";
import { UserComponent } from "./app/users/user/user.component";
import { UsersComponent } from "./app/users/users.component";


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
        {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers', component: ServersComponent, canActivateChild: [AuthGuard], children: [
        {path: ':id', component: ServerComponent, resolve: {myServerDetails: ServerResolver}},
        {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
    {path: 'not-found', component: PageNotFoundComponent, data: {msg: "page Not Found"}},
    {path: '**', redirectTo: '/not-found'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports:[
        RouterModule
    ]
})
export class RoutingConceptsRouting{

}