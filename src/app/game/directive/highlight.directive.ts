import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlightDirective]'
})
export class HighlightDirective implements OnInit{
    constructor(private _element: ElementRef){

    }
    ngOnInit(): void {
       this._element.nativeElement.style.backgroundColor = "green";
    }
}