import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserService } from "../../_services/user.service";
import { AuthGuardService } from "../../_helpers/auth-guard.service";
import {JwtInterceptorService} from "../../_helpers/jwt-interceptor.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PublicRoutingModule
  ],
  providers: [UserService, AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}]
})
export class PublicModule { }
