import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    serverTitle: string = "I am server component";
    serverId: number = 10;
    serverStatus: string = 'offline';
    isServerAvailable: boolean = false;
}