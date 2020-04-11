import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "../../_services/user.service";
import { AuthGuardService } from "../../_services/auth-guard.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PublicRoutingModule
  ],
  providers: [UserService, AuthGuardService]
})
export class PublicModule { }
