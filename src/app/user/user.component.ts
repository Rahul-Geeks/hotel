import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BookingComponent } from './booking/booking.component';
import { BookedlistComponent } from './bookedlist/bookedlist.component'
import { UserService } from '../services/users.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@NgModule({
  declarations: [
    BookingComponent, BookedlistComponent
  ],
  imports: [
  ]
})

export class UserComponent implements OnInit {
  data = {
    email: "",
    name: "",
    phNumber:"",
    address:"",

  }
  stream: string = "val";
  array = [];

  constructor(public user: UserService) {
    this.array = user.users;
  }

  ngOnInit() {
  }
  showData() {
    console.log(this.stream);
  }
  insert() {
    this.array.push(this.data);
  }

}
