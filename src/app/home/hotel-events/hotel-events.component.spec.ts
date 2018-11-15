import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelEventsComponent } from './hotel-events.component';

describe('HotelEventsComponent', () => {
  let component: HotelEventsComponent;
  let fixture: ComponentFixture<HotelEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
