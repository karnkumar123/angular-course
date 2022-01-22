import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: {id:number, name: string}[] = [
    {id: 1, name: 'Amar'},
    {id: 2, name: 'Akbar'},
    {id: 3, name: 'Anthony'}
  ]
  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loadServersOnDemand(){
    this._router.navigate(['/servers'], {relativeTo: this._activatedRoute})  // this is absolute

    // this will go to /users/servers, that we dont have and it will throw error
    //this._router.navigate(['servers'], {relativeTo: this._activatedRoute})  // relative path

  }

  loadServerEditMode(id){
    this._router.navigate(
      ['/servers', id, 'edit'], 
      {relativeTo: this._activatedRoute, queryParams: {allowEdit:1,servername: 'MyServer'}, fragment: 'Loading'}
    )
  }

}
