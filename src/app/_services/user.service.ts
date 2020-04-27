import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_model/user';
import {environment} from '../../environments/environment';
import {UserBase} from "../_model/userBase";

export const InterceptorSkip = 'X-Skip-Interceptor'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    httpOptions: HttpHeaders
    constructor(private httpClient: HttpClient, private httpBackend: HttpBackend) {
    }

    login(user: UserBase) {
        return this.httpClient.post(`${environment.apiUserService}`.concat('login'), user,
            {headers: new HttpHeaders({'Content-Type': 'application/json'})})
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
        //HttpBackend non permette l'invocazione dell'interceptor
        //this.httpClient = new HttpClient(this.httpBackend)

        // Put X-Skip-Jwt-Interceptor in headers for bypassing jwt interceptor
        return this.httpClient.post(`${environment.apiUserService}`.concat('signup'), user,
            {headers:  new HttpHeaders({'Content-Type': 'application/json', 'X-Skip-Jwt-Interceptor': ''}), responseType: 'text' })
    }
}
