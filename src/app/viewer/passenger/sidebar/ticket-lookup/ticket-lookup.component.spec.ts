import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketLookupComponent } from './ticket-lookup.component';

describe('TicketLookupComponent', () => {
  let component: TicketLookupComponent;
  let fixture: ComponentFixture<TicketLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
