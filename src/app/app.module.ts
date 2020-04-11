import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from "./_modules/auth/auth.module";
import { CoreModule } from "./_modules/core/core.module";
import { HeaderComponent } from "./_modules/core/component/header/header.component";
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
import {PublicModule} from "./_modules/public/public.module";
import {LoginComponent} from "./_modules/public/component/login/login.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FooterComponent} from "./_modules/core/component/footer/footer.component";
import {JwtInterceptorService} from "./_services/jwt-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, MenuComponent, LoginComponent
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
    PublicModule,
    MatExpansionModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [MenuService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
