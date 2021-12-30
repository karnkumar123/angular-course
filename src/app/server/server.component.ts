import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    isShow = false;
    secretMsg = "Secret password = tune";
    timeStampArray: any[] = [];
    onClickBtn(){
        this.isShow = !this.isShow;
        this.timeStampArray.push(new Date().toLocaleTimeString())
    }

}