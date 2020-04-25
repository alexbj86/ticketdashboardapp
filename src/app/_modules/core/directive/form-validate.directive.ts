import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {NgControl} from "@angular/forms";
import {Messages} from "../../../_model/messages";

@Directive({
  selector: '[formValidateDirective]',
})
export class FormValidateDirective implements OnInit {

  @Input()
  messages: Messages
  fieldError = new Map()
  @Input()
  errMsg: string

  constructor( private control: NgControl) {
  }

  ngOnInit() {

  }

  @HostListener('blur', ["$event"])
  handleBlurEvent(){
    console.log("handleBlurEvent method called")
    if(this.control.control.invalid){
      //IF not present, added new field error in map
      if(!this.fieldError.get(this.control.name)){
        this.fieldError.set(this.control.name, this.errMsg)
        for (let m of this.fieldError.values()) {
          this.messages.descMessages.push(m)
        }
      }
      this.messages.showMessages = true
    }else {
      // Get msg index from map values, remove element from descError array and remove key from map
      for (let m of this.fieldError.values()){
        const index = this.messages.descMessages.indexOf(m)
        this.messages.descMessages.splice(index,1)
      }
      this.fieldError.delete(this.control.name)
    }
  }

}
