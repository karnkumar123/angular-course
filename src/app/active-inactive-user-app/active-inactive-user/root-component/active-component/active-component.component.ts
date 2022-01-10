import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../data.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-active-component',
  templateUrl: './active-component.component.html',
  styleUrls: ['./active-component.component.css']
})
export class ActiveComponentComponent implements OnInit {
  activeUsers: User[];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.activeUsers = this._dataService.getActiveUsers();
    this._dataService.updateAnotherComponent.subscribe((status) => {
      if(status){
        this.activeUsers = this._dataService.getActiveUsers();
      }
    })
  }

  makeInactive(id: number){
    this._dataService.convertToInactive(id);
    this.activeUsers= this._dataService.getActiveUsers();
    this._dataService.updateAnotherComponent.emit(true);
  }

}
