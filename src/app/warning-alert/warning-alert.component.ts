import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p> I am warning-alert component</p>`,
  styles: ['p{color:yellow;font-family:cursive;background-color:grey}']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
