import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // get jwt token
    const token = localStorage.getItem("access_token")
    console.log("Token Interceptor: " + token)

    if(!token){
      console.log("Token not enable")
      return next.handle(req)
    }

    // add authorization header with jwt token if available
    const with_auth_request = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    })

    // if there is a jwt token, include that to the request header and then send it.
    return next.handle(with_auth_request);
  }


}
