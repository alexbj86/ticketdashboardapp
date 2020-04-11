import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../_services/user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  showError: boolean

  constructor(private userService: UserService, private fb: FormBuilder) {

  }

  ngOnInit() {

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onLogin(userForm) {
    this.userService.login(userForm)
  }
}
