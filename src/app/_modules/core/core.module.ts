import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FormValidateDirective} from "./directive/form-validate.directive";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [FormValidateDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [FormValidateDirective, MatBadgeModule]
})
export class CoreModule { }
