import { EventEmitter } from "@angular/core";

export class AuthService{
    isLoggedIn: boolean = false;
    isLoggedInEmitter = new EventEmitter<boolean>();

    isAuthenticate(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 1000)
        })
    }

    loggedIn(){
        this.isLoggedIn = true;
        this.isLoggedInEmitter.emit(this.isLoggedIn);
    }

    logOut(){
        this.isLoggedIn = false;
        this.isLoggedInEmitter.emit(this.isLoggedIn);
    }
}