import { Component, OnInit } from '@angular/core';
import { AppRoutingService } from 'src/app/services/app-routing.service';

@Component({
  selector: 'app-filterhotel',
  templateUrl: './filterhotel.component.html',
  styleUrls: ['./filterhotel.component.css']
})
export class FilterhotelComponent implements OnInit {
  hotels = [];
  stars = [4,5,6];
  selectStar;
  options
  selectedvalue:any;
  constructor(private hotelSrv: AppRoutingService) { 
    this.options=["Four-Star","Five-Star","Five-Star"]
  }

  ngOnInit() {
  }
  ratingHotels() {
    this.hotelSrv.getHotelsWithFilterStars(this.selectedvalue).subscribe(
      res => {
        this.hotels = res;
        console.log(this.hotels[0].stars);
      }, err => {
        console.log(err);
      }
    );
  }
  
}