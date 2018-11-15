import { Component, OnInit } from '@angular/core';
import { AppRoutingService } from 'src/app/services/app-routing.service';

@Component({
  selector: 'app-allhotels',
  templateUrl: './allhotels.component.html',
  styleUrls: ['./allhotels.component.css']
})
export class AllhotelsComponent implements OnInit {

  hotels = [];
  pageNum = 1;
  pages = [];
  offset = 0;
  count = 5;
  i;
  viewColor: boolean[] = [true,false,false];
  views = ["grid", "table", "down"];
  view;
  constructor(private _hotelsSrv: AppRoutingService) { }

  ngOnInit() {
    this.setPageLength();
    this.getHotels(this.offset);
    this.giveView(0);
  }
  
  giveView(index) {
    for(let count = 0; count < this.views.length; count++){
      this.viewColor[count] = false;
    }
      this.viewColor[index] = true;
      return this.view = this.views[index];
  }

  setPageLength() {
    this.pages.length = 3;
  }
  setOffset(val) {
    this.offset = val;
  }
  public getHotels(offset) {
    this._hotelsSrv.getHotelsWithFilter(offset, this.count)
      .subscribe(
        res => {
          let nextTag = document.getElementById("next");
          if (res.length === 0) {
            nextTag.setAttribute("class", "page-link disabled");
          } else {
            nextTag.setAttribute("class", "page-link");
            this.hotels = res;
            this.offset = offset;
          }
          // this.setDisable(offset/5);
          this.i = offset / 5;
          console.log(this.i);
          // console.log(this.hotels.length);
          let previousTag = document.getElementById("previous");
          if (!this.i) {
            previousTag.setAttribute("class", "page-link disabled");
          } else {
            previousTag.setAttribute("class", "page-link");

          }

          // console.log(nextTag);
        },
        err => {
          console.log(err);
          this.hotels = err;
        }
      );
  };
}
