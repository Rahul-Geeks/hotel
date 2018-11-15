import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userRegisterUrl = "http://localhost:3030/api/user/register";
  private userLoginUrl = "http://localhost:3030/api/user/login";
  private getUserUrl = "http://localhost:3030/api/user";
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.userRegisterUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this.userLoginUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  logOut() {
    localStorage.removeItem("token");
    this._router.navigate(["login"]);
  }
  getUser(){
    return this.http.get<any>(this.getUserUrl);   
  }
}