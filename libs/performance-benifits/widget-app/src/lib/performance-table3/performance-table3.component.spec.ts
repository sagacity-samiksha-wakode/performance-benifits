import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTable3Component } from './performance-table3.component';

describe('PerformanceTable3Component', () => {
  let component: PerformanceTable3Component;
  let fixture: ComponentFixture<PerformanceTable3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceTable3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
