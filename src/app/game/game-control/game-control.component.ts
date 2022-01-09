import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @ViewChild('normalParagraph') normalParagraph: ElementRef;
  counter: number = 0;
  startEventRef: any;
  evenArray: number[] = [];
  oddArray: number[] = [];
  constructor() { }
  value = 10;

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
  onMouseOver(event: MouseEvent){
    this.normalParagraph.nativeElement.style.backgroundColor = "yellow";
    
  }

  onMouseOut(event: MouseEvent){
    this.normalParagraph.nativeElement.style.backgroundColor = 'white';
  }

}
