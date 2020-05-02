import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../_services/auth.service";
import {MenuService} from "../../../../_services/menu.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private menuService: MenuService) { }

  ngOnInit() {
    console.log("user logged: " + this.authService.isLoggedIn)
    this.menuService.setPageTitle("DASHBOARD")
  }

}
