import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
  //providers: [SharedServiceService]
})
export class ComponentBComponent implements OnInit {

  constructor(private _srv: SharedServiceService) { }

  ngOnInit(): void {
  }
  getMyName(){
    let a = this._srv.getName();
    console.log(a);
  }

}
