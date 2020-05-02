import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {MenuService} from "../../../../_services/menu.service";
import {AuthService} from "../../../../_services/auth.service";
import {UserService} from "../../../../_services/user.service";
import {Router} from "@angular/router";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('sidenav', {static: true})
  public sidenav: MatSidenav;
  userLogged: string

  constructor(private menuService: MenuService, private authService: AuthService, public userService:UserService, private route: Router) {
  }

  ngOnInit() {
    this.menuService.setSidenav(this.sidenav);
    this.userLogged = this.authService.getUsername();
  }

  public logout() {
    this.userService.logout();
    this.route.navigate(['ticketdashboard/login'])
    this.menuService.setPageTitle('')
  }
}
