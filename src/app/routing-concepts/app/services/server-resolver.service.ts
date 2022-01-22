import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServerService } from "./server.service";


interface Server{
    id: number;
    name: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private _serverService: ServerService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        let id = route.params.id;
        return this._serverService.getServer(+id);

    }

}