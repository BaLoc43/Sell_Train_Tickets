import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTicketsComponent } from './result-tickets.component';

describe('ResultTicketsComponent', () => {
  let component: ResultTicketsComponent;
  let fixture: ComponentFixture<ResultTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
