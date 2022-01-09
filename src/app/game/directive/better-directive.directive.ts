import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{

  constructor(
    private _elRef: ElementRef,
    private _renderer2: Renderer2
  ) { }
  ngOnInit(): void {
    this._renderer2.setStyle(this._elRef.nativeElement, 'backgroundColor', 'cyan')
  }

}
