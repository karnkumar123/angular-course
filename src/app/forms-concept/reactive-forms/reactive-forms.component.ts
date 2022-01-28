import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders: Array<string> = ['male', 'female'];
  signUpForm: FormGroup;
  constructor() { }
  notAllowedNames: string[] = ['admin@gmail.com', 'user@gmail.com'];
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.notAcceptedAdminAsUsername.bind(this)]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(5)], this.checkAsyncPasswordLength),
      }),
      'gender': new FormControl('female', Validators.required),
      'hobbies': new FormArray([])
    })

    // valuechanges
    this.signUpForm.valueChanges.subscribe(value => console.log(value))
    this.signUpForm.get('gender').valueChanges.subscribe(value => console.log(value))
    this.signUpForm.get('userData.username').valueChanges.subscribe(value => console.log(value));
    this.signUpForm.get('userData').get('password').valueChanges.subscribe(value=> console.log(value));

    //statuschanges
    this.signUpForm.statusChanges.subscribe(value => console.log(value))
    this.signUpForm.get('gender').statusChanges.subscribe(value => console.log(value))
    this.signUpForm.get('userData.username').statusChanges.subscribe(value => console.log(value));
    this.signUpForm.get('userData').get('password').statusChanges.subscribe(value=> console.log(value));
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset({
      'gender': 'male'
    })
  }
  addHobby(){
    const newControl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(newControl);
  }
  notAcceptedAdminAsUsername(control: FormControl): {[errorCode: string]: true}{
    let controlValue: string = control.value;
    if(this.notAllowedNames.indexOf(controlValue) > -1){
      return {'adminNameNotAllowed': true}
    }
    return null
  }

  checkAsyncPasswordLength(control: FormControl): Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}>{
    let controlValue: string = control.value;
    let myPromise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(controlValue.length < 5){
          resolve({'passwordNotCorrect': true})
        }else{
          resolve(null)
        }
      }, 3000)
    })
    return myPromise;
  }

  onSetValue(){
    this.signUpForm.setValue({
      'userData': {
        'username': 'default@gmail.com',
        'password': '1234567'
      },
      'gender': 'female',
      'hobbies': ['Cooking', 'Sport']
    })
  }

  onPatchValue(){
    this.signUpForm.patchValue({
      'userData': {
        'username': 'default@gmail.com'
      }
    })
  }
}
