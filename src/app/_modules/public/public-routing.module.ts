import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { SignupComponent } from "./component/signup/signup.component";


const routes: Routes = [
    {path: '', redirectTo: 'ticketdashboard/login',pathMatch: 'full'},
    {path: 'ticketdashboard/login', component: LoginComponent},
    {path: 'ticketdashboard/signup', component: SignupComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
