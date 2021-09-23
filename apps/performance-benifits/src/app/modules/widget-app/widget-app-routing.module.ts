import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

// import { WidgetAppComponent } from './widget-app.component';

const routes: Routes = [
  // { path: '', component: WidgetAppComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetAppRoutingModule { }
