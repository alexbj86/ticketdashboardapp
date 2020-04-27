import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserService } from "../../_services/user.service";
import { AuthGuardService } from "../../_services/auth-guard.service";
import {JwtInterceptor} from "../core/interceptors/jwt-interceptor.service";
import {CoreModule} from "../core/core.module";
import {ErrorInterceptor} from "../core/interceptors/error-interceptor.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PublicRoutingModule,
    CoreModule
  ],
  providers: [UserService, AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}]
})
export class PublicModule { }
