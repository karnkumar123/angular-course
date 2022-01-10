import { EventEmitter } from "@angular/core";
import { User } from "./data.interface";

export class DataService {

  constructor() { }
  updateAnotherComponent = new EventEmitter<boolean>(false);
  activeUsers: User[] = [];
  inactiveUsers: User[] = [];
  dataSource: User[] = [
    {id: 1, name: 'Karan', status: 'Active'},
    {id: 2, name: 'Manu', status: 'Active'},
    {id: 3, name: 'Saurav', status: 'Inactive'},
    {id: 4, name: 'Abhishek', status: 'Inactive'},
    {id: 5, name: 'Abhijeet', status: 'Inactive'},
    {id: 6, name: 'Manoj', status: 'Active'},
    {id: 7, name: 'Bhargav', status: 'Active'},
    {id: 8, name: 'Saroj', status: 'Inactive'}
  ]

  getActiveUsers(): User[]{
    this.activeUsers = this.dataSource.filter(element => element.status === 'Inactive');
    return this.activeUsers;
  }

  getInactiveUsers(): User[]{
    this.inactiveUsers = this.dataSource.filter(element => element.status === 'Active');
    return this.inactiveUsers;
  }

  convertToActive(id: number): void{
    this.dataSource.map((element) => {
      if(element.id === id){
        element.status = 'Inactive';
      }
    })
  }

  convertToInactive(id: number): void{
    this.dataSource.map((element) => {
      if(element.id === id){
        element.status = 'Active';
      }
    })
  }
}
