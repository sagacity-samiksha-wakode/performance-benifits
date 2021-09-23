import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HelperTextPopoverDirective, HelperTextPopoverDirectiveModule } from './directive/helper-text-popover/helper-text-popover.directive';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { AppHttpInterceptorService } from './services/app-http-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { HttpErrorInterceptorService } from './services/http-error-interceptor.service';
import { LoginComponent } from './views/login/login.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from './materials/material.module';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotificationService } from './services/notification.service';
import { OptionalSelectDirectiveModule } from './directive/optional-select/optional-select.directive';
// import {PerformanceBenifitsSharedAppModule} from '@nx-sagacity/performance-benifits/shared-app';
import { ServerApiInterfaceServiceService } from './services/server-api-interface-service.service';
import { ToastrModule } from 'ngx-toastr';
import { WidgetAppModule } from './modules/widget-app/widget-app.module';

// import { PerformanceBenifitsWidgetAppModule } from '@nx-sagacity/performance-benifits/widget-app';




// import { WidgetModule } from './modules/widget/widget.module';





// import {PerformanceBenifitsWidgetAppModule} from '@performance-benifits/performance-benifits/widget-app';
// import { SharedAppModule } from './modules/shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
      // PerformanceBenifitsWidgetAppModule,
    // PerformanceBenifitsWidgetAppModule,
    WidgetAppModule,
    // PerformanceBenifitsWidgetAppModule,
    // PerformanceBenifitsSharedAppModule,
    // WidgetModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
    // SharedAppModule,
    OptionalSelectDirectiveModule,
    HelperTextPopoverDirectiveModule,

  ],
  providers: [
    ServerApiInterfaceServiceService,
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    },
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
