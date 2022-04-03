import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
 message: string;
 close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.close.emit();
  }

}
