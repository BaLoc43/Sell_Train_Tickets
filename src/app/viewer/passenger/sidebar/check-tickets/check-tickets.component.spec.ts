import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTicketsComponent } from './check-tickets.component';

describe('CheckTicketsComponent', () => {
  let component: CheckTicketsComponent;
  let fixture: ComponentFixture<CheckTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
