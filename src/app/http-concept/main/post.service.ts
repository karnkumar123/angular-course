import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import {Post} from './posts.model';
import { map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PostService{
    postsURL: string = 'https://learn-angular-4d591-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';

    errorSubscription = new Subject<string>();

    constructor(private _httpClient: HttpClient){}
    getPosts(){

        let searchParam = new HttpParams();
        searchParam = searchParam.append('id',1);
        searchParam = searchParam.append('title','mytitle');
        searchParam = searchParam.append('content','mycontent');  
        
        let getHeader = {
            headers: new HttpHeaders({'Customer-Header': 'Hello'}),
            params: searchParam
        }

        return this._httpClient.get<Post[]>(this.postsURL, getHeader).pipe(map((responseData) => {
            let arr = [];
            for(let keys in responseData){
              arr.push({...responseData[keys], id: keys});
            }
            return arr;
        }))
    }

    submitPosts(post: Post){
        return this._httpClient.post(this.postsURL, post, {
            headers: new HttpHeaders({'verb': 'post', 'course': 'angular'}),
            params: new HttpParams().set('id', true),
            observe: 'response',
            responseType: 'json'
        });
    }

    deleteAllPosts(){
        return this._httpClient.delete(this.postsURL, {observe: 'events'})
        .pipe(
            tap((event) => {
                if(event.type === HttpEventType.Sent){
                    console.log(event.type, 'Request sent');
                }else if(event.type === HttpEventType.Response){
                    console.log(event.type, 'Response received')
                }
            })
        );
    }
}