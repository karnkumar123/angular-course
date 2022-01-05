import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElements: Server[] = [];
  @ViewChild('serverContent') serverContent: ElementRef;
  @Output() srvElements = new EventEmitter<Server[]>();
  constructor() { }

  ngOnInit(): void {
  }
  addServer(serverName: HTMLInputElement): void{
     console.log(this.serverContent);
     let serverContent = this.serverContent.nativeElement.value;
     this.serverElements.push(new Server(serverName.value, serverContent))
     this.srvElements.emit(this.serverElements);
  }

}
