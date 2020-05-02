import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../../_services/menu.service";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setPageTitle("SCHEDULER")
  }

}
