import { Injectable } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private sidenav: MatSidenav
  private pageTitle: string

  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav
  }

  public toggle(): void {
    this.sidenav.toggle()
  }

  /**
   * @description set pageTitle when item menu clicked
   * @param pagetTitle
   */
  public setPageTitle(pagetTitle: string){
    this.pageTitle = pagetTitle
  }

  /**
   * @description get page title selected
   */
  public getPageTitle(): string {
    return this.pageTitle
  }
}
