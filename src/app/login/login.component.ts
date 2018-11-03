import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  app: string = "Login Page";
  username: string = "Name";
  password: string = "Password";
  names:string[]=["Rahul", "Rajesh", "Satish"];
  email="rahul@gmail.com";
  constructor() { }

  ngOnInit() {
  }
  showData(){
    return [this.username,this.password];
  }
}