import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgIfKaUlta]'
})
export class NgIfKaUltaDirective {
  @Input('appNgIfKaUlta') set setElement(condition: boolean){
    if(!condition){
      this._vcRef.createEmbeddedView(this._tmplRef);
    }else{
      this._vcRef.clear();
    }
  };
  constructor(
    private _tmplRef: TemplateRef<any>,
    private _vcRef: ViewContainerRef) { }
}
