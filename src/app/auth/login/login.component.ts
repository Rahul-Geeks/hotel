import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails={
    email:"",
    password:"",
  };
  error="";
  constructor(private userSrv: UserService, private _router:Router) { }

  ngOnInit() {
  }
  userLogin(){
    this.userSrv.loginUser(this.userDetails).subscribe(
      res=>{
        console.log(res);
        if(res.auth){
          localStorage.setItem("token", res.token);
          this._router.navigate(["hotels"]);
        }else{
          this._router.navigate(["login"]);
        }
      },err=>{
        console.log(err);
        this.error = err.error.message;
      }
    )
  }
}
