import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private userSrv: UserService) { }

  ngOnInit() {
  }
  isLogIn() {
    if (this.userSrv.loggedIn()) {
      return ["Logout", "Make Another Account"];
    } else {
      return ["Login", "Register"];
    }
  }

  toLogOut() {
    if (this.isLogIn()[0] === "Logout")
      return this.userSrv.logOut();
  }
}
