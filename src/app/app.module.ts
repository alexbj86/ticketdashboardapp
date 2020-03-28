import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from "./_modules/auth/auth.module";
import { CoreModule } from "./_modules/core/core.module";
import { HeaderComponent } from "./_modules/core/component/header/header.component";
import { FooterComponent } from "./_modules/core/component/footer/footer.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MenuService} from "./_services/menu.service";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MenuComponent} from "./_modules/auth/component/menu/menu.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import {AuthRoutingModule} from "./_modules/auth/auth-routing.module";


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    AuthRoutingModule,
    CoreModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatGridListModule,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
