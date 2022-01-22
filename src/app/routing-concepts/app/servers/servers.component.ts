import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string}[] = [];
  constructor(private _serversService: ServerService) { }

  ngOnInit(): void {
    this.servers = this._serversService.getServers();
  }

}
