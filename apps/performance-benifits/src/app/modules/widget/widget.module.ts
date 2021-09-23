import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../materials/material.module';
import { NgModule } from '@angular/core';
import { TransformCurrencyPipeModule } from '../../pipe/transform-currency/transform-currency.pipe';

// import { MaterialModule } from 'src/app/materials/material.module';




@NgModule({
  declarations: [
    // CountCardComponent,
    // CurrencyCardComponent,
    // SummaryListCardComponent,
    // BarChartComponent,
    // KpiChartComponent,
    // RatioChartComponent,
    // DonutChartComponent,
    // DonutChartComponent,
    // MatrixComponent,
    // StepperComponent,
    // MatrixA1Component,
    // NavControlComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TransformCurrencyPipeModule
  ],
  exports: [
    // CountCardComponent,
    // CurrencyCardComponent,
    // SummaryListCardComponent,
    // BarChartComponent,
    // KpiChartComponent,
    // RatioChartComponent,
    // DonutChartComponent,
    // MatrixComponent,
    // StepperComponent,
    // MatrixA1Component,
    // NavControlComponent
  ]
})
export class WidgetModule { }
