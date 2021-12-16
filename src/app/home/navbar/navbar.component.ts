import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('home') homeTab: ElementRef;
  @ViewChild('login') loginTab: ElementRef;
  @ViewChild('register') registerTab: ElementRef;

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

  // Make navigation tabs active by adding `active` class
  makeActive(tab: ElementRef) {
    let allTabs = [this.homeTab, this.loginTab, this.registerTab];
    allTabs.forEach(tabElem => {
      if (tabElem == tab)
        tab.nativeElement.classList.add("active");
      else
        tabElem.nativeElement.classList.remove("active");
    });
  }
}
