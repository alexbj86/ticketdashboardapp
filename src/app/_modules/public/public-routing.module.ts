import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";


const routes: Routes = [
    {path: '', redirectTo: 'ticketdashboard/login',pathMatch: 'full'},
    {path: 'ticketdashboard/login', component: LoginComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
