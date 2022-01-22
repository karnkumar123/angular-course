import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string} | undefined;
  constructor(private _activatedRoute: ActivatedRoute,
    private _serverService: ServerService,
    private _router: Router) { }

  ngOnInit(): void {
    // const id = this._activatedRoute.snapshot.params.id;
    // this.server = this._serverService.getServer(+id);

    // this._activatedRoute.params.subscribe((param) => {
    //   this.server = this._serverService.getServer(+param.id);
    // })

    this.server = this._activatedRoute.snapshot.data['myServerDetails'];

    this._activatedRoute.data.subscribe((value) => {
      this.server = value['myServerDetails']
    })
  }

  goToEdit(){
    this._router.navigate(['edit'], 
    {queryParams: {id:this.server?.id,name:this.server?.name}, relativeTo: this._activatedRoute})
  }

}
