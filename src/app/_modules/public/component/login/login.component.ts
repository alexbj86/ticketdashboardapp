import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../_services/user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../_services/auth.service";
import {Router} from "@angular/router";
import {Messages} from "../../../../_model/messages";
import {UserBase} from "../../../../_model/userBase";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  user: UserBase
  messages: Messages

  constructor(private userService: UserService, private fb: FormBuilder, private authService: AuthService, private route: Router) {

  }

  ngOnInit() {

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  login(userForm) {
    console.log('Username: ' + userForm.value.username)
    console.log('Password:' + userForm.value.password)

    this.user = {
      username: userForm.value.username,
      password: userForm.value.password
    }

    this.userService.login(this.user).subscribe(user => {
      this.authService.setLoggedIn(true)
      this.route.navigate(["/ticketdashboard/auth/dashboard"])
    }, error => {
      this.messages = {
        showMessages: true,
        descMessages: error
      }
    })
  }
}
