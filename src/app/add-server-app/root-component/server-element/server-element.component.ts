import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('element') element: Server = {name: '', content: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
