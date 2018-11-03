import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    registerData={
        name:"",
        email:"",
        phNumber:"",
        pass:"",
        conPass:""
    }    
    password:string="vghfdgd";
    passwordCon:string;
    email:string="abc@gmail.com";
    name:string;
    address:string;

  constructor() { }

  ngOnInit() {
  }
  checkPass(){
    if(this.password === this.passwordCon){
      console.log("Both Passwords are same");
      return true;
    }
  }
  showData(){
    console.log(`Name:${this.name}
    Email:${this.email}
    Address:${this.address}
    Password:${this.password}`);
  }

}
