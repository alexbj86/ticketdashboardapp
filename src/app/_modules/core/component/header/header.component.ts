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
    localStorage.getItem("access_token") ? this.showMenu = true : this.showMenu = false
  }

  public menu() {
    this.menuService.toggle();
  }

  public getPageTitle(): string {
    return this.menuService.getPageTitle();
  }
}
