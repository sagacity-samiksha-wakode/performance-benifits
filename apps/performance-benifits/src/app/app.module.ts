import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { PerformanceBenifitsWidgetAppModule } from '@nx-sagacity/performance-benifits/widget-app';

@NgModule({
  declarations: [AppComponent,DashboardComponent],
  imports: [
  BrowserModule,
  MatCardModule,
  PerformanceBenifitsWidgetAppModule,
  MaterialModule,
  BrowserAnimationsModule,
  HttpClientModule


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [

  ],
})
export class AppModule {}
