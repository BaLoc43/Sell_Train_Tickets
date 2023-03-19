import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTicketsComponent } from './find-tickets.component';

describe('FindTicketsComponent', () => {
  let component: FindTicketsComponent;
  let fixture: ComponentFixture<FindTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
