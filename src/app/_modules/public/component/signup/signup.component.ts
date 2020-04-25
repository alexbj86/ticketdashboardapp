import {Component, HostListener, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {Messages} from "../../../../_model/messages";
import {PasswordValidator} from "../../../core/utils/PasswordValidator";
import {User} from "../../../../_model/user";
import {UserService} from "../../../../_services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  messages: Messages
  user: User

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.messages = {
      showMessages: false,
      descMessages: []
    }
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

    this.user = {
      username: signupForm.value.username,
      password: signupForm.value.password,
      key: signupForm.value.apiKey
    }
    this.userService.signup(this.user).subscribe( message => {
      const msg = JSON.parse(message)
      console.log("message: " + msg.message)
    }, error => {
      console.log("Exception in save user method: " + error)
    })

  }


}
