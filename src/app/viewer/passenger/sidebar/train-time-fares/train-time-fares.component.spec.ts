import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTimeFaresComponent } from './train-time-fares.component';

describe('TrainTimeFaresComponent', () => {
  let component: TrainTimeFaresComponent;
  let fixture: ComponentFixture<TrainTimeFaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainTimeFaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainTimeFaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
