import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../_services/user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../_model/user";
import {AuthService} from "../../../../_services/auth.service";
import {Router} from "@angular/router";
import {UserError} from "../../../../_model/userError";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  user: User
  error: UserError

  constructor(private userService: UserService, private fb: FormBuilder, private authService: AuthService, private route: Router) {

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onLogin(userForm) {
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
      this.error = {
        isError: true,
        descError: error
      }
    })
  }
}
