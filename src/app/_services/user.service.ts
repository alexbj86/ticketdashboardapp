import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_model/user';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    login(user: User) {
        return this.http.post(environment.apiGateway.concat(environment.apiUserService).concat('/login'), user).pipe(
            map( (result: any) => {
                if (result != null) {
                    // set access_token, username and key
                    localStorage.setItem("access_token", result.accessToken)
                    localStorage.setItem("username", result.username)
                    localStorage.setItem("key", result.key)
                    this.authService.setLoggedIn(true)
                    return true;
                }

                // if api return errors
                const error = result.error.message || result.status;
                throw throwError(error);
            })
        );
    }

    /**
     * @desc Removes the token from the localstorage
     * @memberof AuthenticationService
     */
    logout() {
        localStorage.removeItem("access_token")
    }
}
