import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'nameShorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: string, limit: number) {
        if(value.length >= limit){
            return value.substring(0,9) + '...';
        }else{
            return value
        }
    }

}