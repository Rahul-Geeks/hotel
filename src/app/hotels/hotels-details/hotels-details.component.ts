import { Component, OnInit } from '@angular/core';
import { AppRoutingService} from '../../services/app-routing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.component.html',
  styleUrls: ['./hotels-details.component.css']
})
export class HotelsDetailsComponent implements OnInit {
  hotel = {};
  _hotelId;
  constructor(private hotelsSrv: AppRoutingService, private acRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
    this.getHotel();
  }
  getHotel(){
    this.hotelsSrv.getOneHotel(this._hotelId).subscribe(
      res=>{
        this.hotel = res;
        console.log(this.hotel);
      },
      err=>{
        this.hotel = err;   
        console.log(this.hotel);
      }
    )    
  }
  getParams(){
    this.acRoutes.paramMap.subscribe(
      params=>{
        // console.log(params);
        this._hotelId = params.get("hotelId");
        return params.get("hotelId");
      }
    )
  }
    
}
