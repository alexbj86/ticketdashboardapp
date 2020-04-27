import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {InterceptorSkip, UserService} from "../../../_services/user.service";
import {catchError} from "rxjs/operators";


/**
 * This is used to logout the user, when the server responds with an unathorized status code.
 * Especially when the session token expires.
 * @export
 * @class ErrorInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private userService: UserService) { }

  /**
   * Interceptor intercepts the responses, and then process based on the received status code
   * Read more : http://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   * @memberof ErrorInterceptor
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({ headers: req.headers.set('Authorization', 'Bearer') });
    console.log("call error interceptor")
      return next.handle(clonedRequest).pipe(catchError(err => {
        if(err.status === 401) {

          // auto logout if 401 response returned from api
          this.userService.logout()
        }

        // err.error is not null, if the ResponsenEntity contains an Exception
        // err.error.message will give the custom message send from the server
        return throwError(err.error)
      }))
  }
}
