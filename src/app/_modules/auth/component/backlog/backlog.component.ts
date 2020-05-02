import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../../_services/menu.service";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setPageTitle("BACKLOG")
  }

}
