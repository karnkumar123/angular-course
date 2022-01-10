import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
 // providers: [SharedServiceService]
})
export class ComponentAComponent implements OnInit {

  constructor(private _srv: SharedServiceService) { }

  ngOnInit(): void {
  }
  setMyName(){
    this._srv.setName("Angular")
  }
}
