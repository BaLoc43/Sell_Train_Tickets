import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTicketsComponent } from './pay-tickets.component';

describe('PayTicketsComponent', () => {
  let component: PayTicketsComponent;
  let fixture: ComponentFixture<PayTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
