import {Component, OnInit} from '@angular/core';
import { MenuService } from "../../../../_services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {

  }

  menu() {
    this.menuService.toggle();
  }

}
