import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTable2Component } from './performance-table2.component';

describe('PerformanceTable2Component', () => {
  let component: PerformanceTable2Component;
  let fixture: ComponentFixture<PerformanceTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceTable2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
