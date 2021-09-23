import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PerformanceComponent
  ],
  exports: [
    PerformanceComponent
  ],
})
export class PerformanceBenifitsSharedAppModule {}
