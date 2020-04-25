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
        console.log("call jwt interceptor")
        return next.handle(req).pipe(
            tap( event => {
                if(event instanceof HttpResponse) {
                    const token = event.body.accessToken
                    this.authService.saveToken(token)
                    this.authService.saveUsername(event.body.username)
                    this.authService.saveKey(event.body.key)
                }
            })
        )
    }


}
