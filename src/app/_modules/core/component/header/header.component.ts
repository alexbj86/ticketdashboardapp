import {Component, OnInit} from '@angular/core';
import { MenuService } from "../../../../_services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    sessionStorage.getItem("username") ? this.showMenu = true : this.showMenu = false
  }

  menu() {
    this.menuService.toggle();
  }

}
