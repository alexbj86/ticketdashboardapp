import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../_services/auth.service";
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap( event => {
                // console.log('Intercepted! response',event);
                if(event instanceof HttpResponse) {
                    const token = event.body.accessToken
                    this.authService.saveToken(token)
                    this.authService.saveUsername(event.body.username)
                    this.authService.saveKey(event.body.key)
                    // console.log("Token Interceptor: " + event.body.accessToken)
                    // req.clone({
                    //     headers: req.headers.set("Authorization", `Bearer ${token}`)
                    // })
                }
            })
        )


        // // get jwt token
        // const token = this.authService.getToken()
        // console.log("Token Interceptor: " + token)
        //
        // if(!token){
        //   console.log("Token not enable")
        //   return next.handle(req)
        // }
        //
        // // add authorization header with jwt token if available
        // const with_auth_request = req.clone({
        //   headers: req.headers.set("Authorization", `Bearer ${token}`)
        // })
        //
        // // if there is a jwt token, include that to the request header and then send it.
        // return next.handle(with_auth_request);
    }


}
