import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByGender',
    pure: true
})
export class FilterPipe implements PipeTransform{
    transform(valueArray: {name: string, gender: string}[], gender: string) {
        if(gender === null || gender === undefined || gender === ''){
            return valueArray;
        }else{
            let finalString = [];
            valueArray.forEach((ele) => {
                if(ele.gender === gender){
                    finalString.push(ele);
                }
            })
            return finalString;
        }
    }
}