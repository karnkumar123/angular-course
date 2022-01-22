import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  errorMsg: string;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMsg = this._activatedRoute.snapshot.data['msg'];
    // if loading from same component
    this._activatedRoute.data.subscribe((data) => {
      this.errorMsg = data['msg'];
    })
  }

  goHome(){
    this._router.navigate(['/home']);
  }

}
