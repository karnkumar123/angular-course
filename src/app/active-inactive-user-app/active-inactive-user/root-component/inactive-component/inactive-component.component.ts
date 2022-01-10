import { Component, OnInit } from '@angular/core';
import { User } from '../data.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inactive-component',
  templateUrl: './inactive-component.component.html',
  styleUrls: ['./inactive-component.component.css']
})
export class InactiveComponentComponent implements OnInit {

  inactiveUsers: User[];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.inactiveUsers = this._dataService.getInactiveUsers();

    this._dataService.updateAnotherComponent.subscribe((status) => {
      if(status){
        this.inactiveUsers = this._dataService.getInactiveUsers();
      }
    })
  }

  makeActive(id: number){
    this._dataService.convertToActive(id);
    this.inactiveUsers= this._dataService.getInactiveUsers();
    this._dataService.updateAnotherComponent.emit(true);
  }

}
