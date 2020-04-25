import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./component/menu/menu.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {SchedulerComponent} from "./component/scheduler/scheduler.component";
import {BacklogComponent} from "./component/backlog/backlog.component";
import {AuthGuardService} from "../../_services/auth-guard.service";


const routes: Routes = [
  {path: 'ticketdashboard/auth', component: MenuComponent, canActivate: [AuthGuardService], children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'scheduler', component: SchedulerComponent},
      {path: 'backlog', component: BacklogComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
