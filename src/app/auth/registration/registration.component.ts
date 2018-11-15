import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userDetails = {
    name: "",
    phoneNumber: "",
    email: "",
    password: ""
  }

  constructor(private userSrv: UserService, private _router: Router) { }

  ngOnInit() {
  }

  registerOneUser() {
    // console.log(this.userDetails);

    this.userSrv.registerUser(this.userDetails).subscribe(
      res => {
        console.log(res);
        if (res.auth) {
          localStorage.setItem("token", res.token);
          this._router.navigate(['hotels']);
        }
        else{
          this._router.navigate(['login']);
        }
      }, err => {
        console.log(err);
      }
    );
  }

  // getName() {
  //   console.log(this.registerDetails.name);

  // }
}
