import { Component, OnInit } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent implements OnInit {
  serverElements: Server[] = [];
  students: string[] = ['Amar', 'akbar', 'anthony'];
  constructor() { }

  ngOnInit(): void {
  }

}
