import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelregComponent } from './hotelreg.component';

describe('HotelregComponent', () => {
  let component: HotelregComponent;
  let fixture: ComponentFixture<HotelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
