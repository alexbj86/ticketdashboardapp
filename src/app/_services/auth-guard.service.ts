import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.getToken()) {
      console.log("User logged")
      return true
    }

    console.log('User not authenticate')

    // this.userService.logout()
    this.route.navigate(['ticketdashboard/login'])
    return false;
  }


}
