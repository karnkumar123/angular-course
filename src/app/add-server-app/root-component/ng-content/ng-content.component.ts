import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit, AfterContentInit {
 @ContentChild('ulElement') ulElement: ElementRef;
  constructor() { }
  ngAfterContentInit(): void {
    console.log('In aftercontentinit ',this.ulElement.nativeElement);
  }

  ngOnInit(): void {
   
  }


}
