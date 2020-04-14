import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_model/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

    @Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    login(user: User):Observable<any> {
        return this.http.post(`${environment.apiGateway}`.concat(`${environment.apiUserService}`).concat('login'), user, httpOptions)
    }

    /**
     * @desc Removes the token from the localstorage
     * @memberof AuthenticationService
     */
    logout() {
        console.log("logout method invoked")
        localStorage.removeItem("username")
        localStorage.removeItem("key")
        localStorage.removeItem("access_token")
    }
}
