import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from '../placeholder.directive';
import {AlertModalComponent} from './alert-modal/alert-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isError: boolean = false;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private closeSub: Subscription;
  
  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm){
    console.log(loginForm.value);
    if(loginForm.value.email === 'admin' && loginForm.value.password === 'Fiery.1'){
      this.isError = false;
    }else{
      this.isError = true;
      this.createAlertModal('Please enter correct credentials!')
    }
  }
  onCloseModal(){
    this.isError = null;
  }

  createAlertModal(msg: string){
      let alertComponentResolverFactory = this._componentFactoryResolver.resolveComponentFactory(AlertModalComponent);

      let alertHostViewContainerRef = this.alertHost._viewContainerRef;
      alertHostViewContainerRef.clear();

      let alertComponentRef = alertHostViewContainerRef.createComponent(alertComponentResolverFactory);
      alertComponentRef.instance.message = msg;
      this.closeSub = alertComponentRef.instance.close.subscribe(() => {
        alertHostViewContainerRef.clear();
        this.closeSub.unsubscribe();
      })
  }

}
