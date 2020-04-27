import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../../_services/auth.service";
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({ headers: req.headers.set('Authorization', 'Bearer') });
        console.log("call jwt interceptor")
        // if request contains X-Skip-Jwt-Interceptor, bypass setting token
        if(req.headers && req.headers.has('X-Skip-Jwt-Interceptor')){
            console.log("X-Skip-Jwt-Interceptor")
            return next.handle(clonedRequest)
        }

        return next.handle(clonedRequest).pipe(
            tap( event => {
                if(event instanceof HttpResponse) {
                    console.log("event: " + JSON.stringify(event.body))
                    const token = event.body.accessToken
                    this.authService.saveToken(token)
                    this.authService.saveUsername(event.body.username)
                    this.authService.saveKey(event.body.key)
                }
            })
        )
    }


}
