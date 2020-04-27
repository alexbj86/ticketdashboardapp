import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Messages} from "../../../../_model/messages";
import {PasswordValidator} from "../../../core/utils/PasswordValidator";
import {User} from "../../../../_model/user";
import {UserService} from "../../../../_services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  signupForm: FormGroup
  messages: Messages
  user: User

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.initializeErrors();
  }


  ngOnInit() {

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        PasswordValidator.matchPassword
      ])],
      apiKey: ['', Validators.required],
    })

  }


  saveUser(signupForm) {

    this.initializeErrors()

    this.user = {
      username: signupForm.value.username,
      password: signupForm.value.password,
      key: signupForm.value.apiKey
    }
    this.userService.signup(this.user).subscribe( message => {
      const msg = JSON.parse(message)
      console.log("message: " + msg.message)
      this.messages.showMessages = true
      this.messages.descMessages.push(msg.message)
      if(msg.responseCode === 200)
        this.messages.msgColor = 'green'

    }, error => {
      this.messages.showMessages = true
      this.messages.descMessages.push(error)
      console.log("Exception in save user method: " + error)
    })

  }

  private initializeErrors() {
    this.messages = {
      showMessages: false,
      descMessages: [],
      msgColor: ''
    }
  }

  ngOnDestroy(): void {
    this.initializeErrors()
  }



}
