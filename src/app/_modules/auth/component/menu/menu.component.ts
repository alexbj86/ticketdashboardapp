import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {MenuService} from "../../../../_services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('sidenav', {static: true})
  public sidenav: MatSidenav;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setSidenav(this.sidenav);
  }

}
