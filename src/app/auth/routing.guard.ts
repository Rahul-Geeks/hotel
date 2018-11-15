import { Injectable } from '@angular/core';
import { CanActivate, Router  } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {
  constructor(private userSrv: UserService, private router: Router) { }
  canActivate():boolean{
    if (this.userSrv.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
