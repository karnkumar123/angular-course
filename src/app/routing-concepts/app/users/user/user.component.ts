import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  paramSubs: Subscription;
  id: number;
  name: string;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnDestroy(): void {
    this.paramSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.name = this._activatedRoute.snapshot.params['name'];

    this.paramSubs = this._activatedRoute.params.subscribe((param) => {
      this.id = param.id;
      this.name = param.name;
    })
  }
}
