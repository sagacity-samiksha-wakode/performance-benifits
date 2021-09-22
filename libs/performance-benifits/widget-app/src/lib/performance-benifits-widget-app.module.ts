import { CommonModule } from '@angular/common';
// import { AppService } from '';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PerformanceTable2Component } from './performance-table2/performance-table2.component';
import { PerformanceTable3Component } from './performance-table3/performance-table3.component';
import { PerformanceTableComponent } from './performance-table/performance-table.component';
// import { MaterialModule } from 'material/material.module.ts;

// import { AppService } from './app.service';
@NgModule({
  imports: [CommonModule,HttpClientModule ],
  declarations: [
    PerformanceTableComponent,
    PerformanceTable2Component,
    PerformanceTable3Component,

  ],
  providers:[HttpClient],
  exports: [
    PerformanceTableComponent,
    PerformanceTable2Component,
    PerformanceTable3Component

  ],
})
export class PerformanceBenifitsWidgetAppModule {}
