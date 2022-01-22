import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-observables-concepts',
  templateUrl: './observables-concepts.component.html',
  styleUrls: ['./observables-concepts.component.css']
})
export class ObservablesConceptsComponent implements OnInit, OnDestroy {
  //buttonClickEventEmitter = new EventEmitter<boolean>();
  buttonClickSubject = new BehaviorSubject<boolean>(false);
  isActivated: boolean = false;
  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    // this.buttonClickEventEmitter.subscribe((data)=> {
    //   this.isActivated = data;
    // })
    this.buttonClickSubject.subscribe((data) => {
      this.isActivated = data;
    })
  }
  onActivate(){
    //this.buttonClickEventEmitter.emit(true)
    this.buttonClickSubject.next(true);
  }

}
