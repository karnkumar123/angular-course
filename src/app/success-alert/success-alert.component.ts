import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p> I am success-alert component`,
  styles: ['p{color:green;font-family:cursive}']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
