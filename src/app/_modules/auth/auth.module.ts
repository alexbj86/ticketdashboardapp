import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {Router, RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { SchedulerComponent } from './component/scheduler/scheduler.component';
import { BacklogComponent } from './component/backlog/backlog.component';
import {AuthService} from "../../_services/auth.service";
import {AuthGuardService} from "../../_helpers/auth-guard.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptorService} from "../../_helpers/jwt-interceptor.service";
import {ErrorInterceptorService} from "../../_helpers/error-interceptor.service";



@NgModule({
  declarations: [DashboardComponent, SchedulerComponent, BacklogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers:[AuthService, AuthGuardService,{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}]
})
export class AuthModule {

  constructor(private router: Router) {
    // TODO decommentare dopo aver realizzato la parte login
    this.router.navigate(['/ticketdashboard/auth/dashboard']);
  }
}
