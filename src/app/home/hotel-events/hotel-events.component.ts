import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-events',
  templateUrl: './hotel-events.component.html',
  styleUrls: ['./hotel-events.component.css']
})
export class HotelEventsComponent implements OnInit {
  // musicEvents = ["hyy", "hello"];
  // script;
  // eventsData = [{
  //   "context": "http://schema.org",
  //   "type": "MusicEvent",
  //   "name": "B.B. King",
  //   "startDate": "2014-04-12T19:30",
  //   "location": {
  //     "@type": "Place",
  //     "name": "Lupo's Heartbreak Hotel",
  //     "address": "79 Washington St., Providence, RI"
  //   },
  //   "offers": {
  //     "@type": "Offer",
  //     "url": "https://www.etix.com/ticket/1771656"
  //   }
  // }, {
  //   "context": "http://keema.org",
  //   "type": "PartyEvent",
  //   "name": "C.C. Queen",
  //   "startDate": "2017-01-13T20:00",
  //   "location": {
  //     "@type": "Place",
  //     "name": "Supo's Legbreak Hotel",
  //     "address": "New Delhi"
  //   },
  //   "offers": {
  //     "@type": "Offer",
  //     "url": "https://www.etixfewf.com/ticket/1771657"
  //   }
  // }];
  constructor() { }

  ngOnInit() {
    // this.showScript(this.script);
  }
  // showScript(script){
  //   console.log(script[0].context);
  // }
  // validateEvent() {
  //   for (let count = 0; count < this.eventsData.length; count++) {

  //   }
  // }
}