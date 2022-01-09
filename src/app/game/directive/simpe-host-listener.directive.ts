import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSimpeHostListener]'
})
export class SimpeHostListenerDirective {

 @Input('defaultColor') defaultColor: string;
 @Input('hoveringColor') hoveringColor: string;
 @HostBinding('style.backgroundColor') backgroundColorOfHostElement: string;
  constructor(
    private _renderer2: Renderer2,
    private _elRef: ElementRef
  ) {
    console.log(_elRef);
    
   }

  @HostListener('mouseenter') onMouseOver(event: MouseEvent){
    //this._renderer2.setStyle(this._elRef.nativeElement, 'background-color', 'yellow');
    //this.backgroundColorOfHostElement = 'green';
    this.backgroundColorOfHostElement = this.hoveringColor;
  }

  @HostListener('mouseout') onMouseOut(event: MouseEvent){
    //this._renderer2.setStyle(this._elRef.nativeElement, 'backgroundColor', 'transparent');
    //this.backgroundColorOfHostElement = 'violet'
    this.backgroundColorOfHostElement = this.defaultColor;
  }

}
