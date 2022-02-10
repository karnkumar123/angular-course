import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap , map} from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', '123xyz'), 
            params: req.params.append('name', 'karan')
        })
        return next.handle(modifiedRequest).pipe(map((responseData) => {
            if(req.method === 'GET'){
                console.log('Response data recieved');
            }
            return responseData;
        }))
    }

}