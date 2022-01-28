import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  defaultlCountryString: string = "others";
  mydesc: string;
  genders: Array<string> = ['male', 'female'];
  @ViewChild('myForm') myForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value);
  // }

  onSubmit(){
    console.log(this.myForm);
  }

  setWholeForm(){
    this.myForm.setValue({
      username: 'SuperUser@gmail.com',
      password: 'superuser',
      sex: 'male',
      desc: 'nothing to say',
      myAddress: {
        city: 'kolkata',
        state: 'bihar',
        pincode: '701010',
        country: 'ind'
      }
    })
  }

  setUsername(){
    this.myForm.form.patchValue({
      username:'admin@gmail.com'
    })
  }

  onResetForm(){
    this.myForm.reset();
  }

}
