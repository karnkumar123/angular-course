import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-form',
    templateUrl: '../forms-concept/app-forms.component.html'
})
export class AppFormsComponent{
    constructor(private _router: Router){

    }
    tdfRoute(){
        this._router.navigate(['tdf'])
    }
    rdfRoute(){
        this._router.navigate(['rdf'])
    }
}