import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isAllowedServer: boolean = false;
  serverCreationStats: string = `No server is created !`;
  enteredServerName: string = 'Test server';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isAllowedServer = true;
    }, 4000)
  }
  onCreateServer(){
    this.serverCreationStats = 'Server is created !';
  }
}
