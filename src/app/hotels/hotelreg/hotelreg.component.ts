import { Component, OnInit } from '@angular/core';
import { AppRoutingService } from 'src/app/services/app-routing.service';

@Component({
  selector: 'app-hotelreg',
  templateUrl: './hotelreg.component.html',
  styleUrls: ['./hotelreg.component.css']
})
export class HotelregComponent implements OnInit {
  hotelDetails = {
    name: "",
    password: "",
    address: "",
    description: "",
  };
  headers= {
    xaccesstoken: localStorage.getItem("token")
  }
  constructor(private hotelSrv: AppRoutingService) { }

  ngOnInit() {
  }
  addHotel() {
    this.hotelSrv.addOneHotel(this.hotelDetails, this.headers).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    )
  }
}
