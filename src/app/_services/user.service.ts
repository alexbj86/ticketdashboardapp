import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_model/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UserBase} from "../_model/userBase";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    httpOptions: HttpHeaders
    constructor(private http: HttpClient, private httpBackend: HttpBackend) {
        this.httpOptions = new HttpHeaders({'Content-Type': 'application/json'})
    }

    login(user: UserBase):Observable<any> {
        return this.http.post(`${environment.apiUserService}`.concat('login'), user, {headers: this.httpOptions, responseType: 'text'})
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

    signup(user: User) {
        //HttpBackend non permette l'invocazione del interceptor
        this.http = new HttpClient(this.httpBackend)
        return this.http.post(`${environment.apiUserService}`.concat('signup'), user, {headers: this.httpOptions, responseType: 'text' })
    }
}
