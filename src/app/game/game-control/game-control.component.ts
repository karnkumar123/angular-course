import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  startEventRef: any;
  evenArray: number[] = [];
  oddArray: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  startEvent(){
    this.startEventRef = setInterval(() =>{
      this.counter++;
      if(this.counter % 2 === 0){
        this.evenArray.push(this.counter);
      }else{
        this.oddArray.push(this.counter);
      }
    }, 100)

  }
  stopEvent(){
    clearInterval(this.startEventRef);
  }

}
