import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: {name: string, gender: string}[]){
      const namedArray = [];
      value.forEach(ele => namedArray.push(ele.name));
      namedArray.sort();
      const finalArr = [];
      namedArray.forEach((element1) => {
        finalArr.push(value.find(element2 => element2.name === element1));
      })
      return finalArr;
  }

}
