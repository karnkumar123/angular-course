import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._authService.isLoggedIn;

    this._authService.isLoggedInEmitter.subscribe((data) => {
      this.isLoggedIn = data
    })
  }

  componentAdded(event){
    console.log('Event->', event);
    
  }

}
