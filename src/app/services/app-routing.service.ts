import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppRoutingService {
  private _hotelsUrl = "http://localhost:3030/api/hotels";
  private _hotelUrl = "http://localhost:3030/api/hotel";
  constructor(private http: HttpClient) { }
  getAllHotels() {
    return this.http.get<any>(this._hotelsUrl);
  }
  getHotelsWithFilter(offset, count) {
    return this.http.get<any>(this._hotelsUrl + "?offset=" + offset + "&&count=" + count);
  }
  getOneHotel(_hotelId) {
    return this.http.get<any>(this._hotelUrl + "/" + _hotelId);
  }
  addOneHotel(hotel, header) {
    return this.http.post<any>(this._hotelUrl + "/new", hotel, header);
  }
  getHotelsWithFilterStars(star){
    return this.http.get<any>(this._hotelsUrl+"/filterhotelswithrating?star="+star);
  }
}