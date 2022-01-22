import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from '../../services/can-deactivate-guard.guard';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  isAllowed: boolean;
  servername: string;
  server: string;
  serverId: number;
  changesSaved: boolean = false;
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _serverService: ServerService,
    private _router: Router) { }

  ngOnInit(): void {
    console.log('Route Param->', this._activatedRoute.snapshot.params);
    console.log('Query Params->',this._activatedRoute.snapshot.queryParams);
    console.log('Fragment->', this._activatedRoute.snapshot.fragment);

    //  for reactive when we load the same component from the same component
    this._activatedRoute.params.subscribe(data => console.log(data));
    this._activatedRoute.queryParams.subscribe(data => {
      this.isAllowed = data.allowEdit === '0' ? false: true;
      this.serverId = +data.id;
      this.server = data.name;
      this.servername = data.name
    });

    // fragment
    this._activatedRoute.fragment.subscribe(data => console.log(data));
  }

  saveServer(){
    this._serverService.saveServer(this.serverId, this.servername)
    this.changesSaved = true;
    this._router.navigate(['../'], {relativeTo: this._activatedRoute})
  }
  
  canDeactivate1(): boolean | Observable<boolean> | Promise<boolean>{
    if(this.servername !==  this.server && this.changesSaved === false){
      return confirm('Do you want to discard the changes ?');
    }else{
      return true;
    }
  };
}
