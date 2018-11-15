import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  role = "";
  error= "";
  constructor(private userSrv: UserService, private router: Router) { }
  canActivate() {
    this.userSrv.getUser().subscribe(
      res => {
        console.log(res);
        this.role = res.role;
      },
      err => {
        console.log(err);
      }
    );
    if (this.role === "admin") {
      return true;
    }else{
      this.error = "You cant access for admin role";
      return false;
    }
  }
}