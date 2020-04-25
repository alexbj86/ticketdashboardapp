import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FormValidateDirective} from "./directive/form-validate.directive";


@NgModule({
  declarations: [FormValidateDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [FormValidateDirective]
})
export class CoreModule { }
