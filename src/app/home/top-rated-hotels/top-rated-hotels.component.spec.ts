import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedHotelsComponent } from './top-rated-hotels.component';

describe('TopRatedHotelsComponent', () => {
  let component: TopRatedHotelsComponent;
  let fixture: ComponentFixture<TopRatedHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
