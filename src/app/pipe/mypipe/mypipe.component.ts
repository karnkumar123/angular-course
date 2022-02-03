import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrls: ['./mypipe.component.css']
})
export class MypipeComponent implements OnInit {
  filteredString: string='';

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => resolve('stable'), 3000)
  })
  constructor() { }

  ngOnInit(): void {
  }
  addMale(){
    this.studentsName.push({
      name: 'New male',
      gender: 'male'
    })
  }
  addFemale(){
    this.studentsName.push({
      name: 'New female',
      gender: 'female'
    })
  }

  studentsName: Array<{name: string, gender: string}> = [
    {name: 'Ram Prasad Bismil', gender: 'male'},
    {name: 'Lakahn Singh Burnwal', gender: 'male'},
    {name: 'Akhila', gender: 'female'},
    {name: 'Rahul', gender: 'male'},
    {name: 'Sumona Mahajan Chaturvedi', gender: 'female'}
  ]

}
