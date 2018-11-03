import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedlistComponent } from './bookedlist.component';

describe('BookedlistComponent', () => {
  let component: BookedlistComponent;
  let fixture: ComponentFixture<BookedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
