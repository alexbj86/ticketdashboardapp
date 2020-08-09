import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor() { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  public getToken(): string {
    return localStorage.getItem("access_token")
  }

  public saveToken(token: string) {
    localStorage.setItem("access_token", token)
  }

  public getUsername(): string {
    return localStorage.getItem("username")
  }

  public saveUsername(username: string) {
    console.log("username: " + username)
    localStorage.setItem("username", username)
  }

  public getKey(): string {
    return localStorage.getItem("key")
  }

  public saveKey(key: string) {
    localStorage.setItem("key", key)
  }
}
