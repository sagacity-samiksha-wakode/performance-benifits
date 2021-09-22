import * as Chart from 'chart.js';

import { CommonModule } from '@angular/common';
import { DashbaordContainerComponent } from './dashboard/dashbaord-container/dashbaord-container.component';
import { DialogModule } from 'primeng/dialog';
import { HelperTextPopoverDirectiveModule } from '../../directive/helper-text-popover/helper-text-popover.directive';
import { MaterialModule } from '../../materials/material.module';
import { NgModule } from '@angular/core';
import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { TransformCurrencyPipeModule } from '../../pipe/transform-currency/transform-currency.pipe';
import { ValidateTokenComponent } from './validate-token/validate-token.component';

// import { SharedAppModule } from '../shared/shared.module';



// import { WidgetAppModule } from '../widget-app/widget-app.module';


// import { PermitListingComponent } from './permit-listing/permit-listing.component';
// import { PermitViewComponent } from './permit-view/permit-view.component';
// import { UserManagementComponent } from './user-management/user-management.component';


// import { NgxMatNativeDateModule, NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

// import { WidgetModule } from '../widget/widget.module';
// import { PermitManagerJeopardyComponent } from './permit-manager-jeopardy/permit-manager-jeopardy.component';
// import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';


// import { PermitListingPmtMgrComponent } from './permit-manager/permit-listing-pmt-mgr/permit-listing-pmt-mgr.component';
// import { PermitViewPmtMgrComponent } from './permit-manager/permit-view-pmt-mgr/permit-view-pmt-mgr.component';

@NgModule({
  declarations: [
    DashbaordContainerComponent,
    // PermitListingComponent,
    // PermitViewComponent,
    // UserManagementComponent,
    // ManagementDashboardComponent,
    // PermitManagerJeopardyComponent,
    ValidateTokenComponent,
    // PermitListingPmtMgrComponent,
    // PermitViewPmtMgrComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    // WidgetAppModule,
    // WidgetModule,
    // DialogModule,
    MaterialModule,
    // SharedAppModule,
    TransformCurrencyPipeModule,
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
    HelperTextPopoverDirectiveModule
  ]
})
export class PageLayoutModule { }
