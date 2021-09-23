import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModule } from 'primeng/dialog';
import { MaterialModule } from 'apps/performance-benifits/src/material/material.module';
import { NgModule } from '@angular/core';
import { PlaceHolderComponent } from '../shared/place-holder/place-holder.component';

// import { MaterialModule } from '../../materials/material.module';
// import { MaterialModule } from 'src/app/materials/material.module';



@NgModule({
  declarations: [
    PlaceHolderComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    MaterialModule,
    // SharedAppModule
  ],
  exports:[
    PlaceHolderComponent,
    DialogComponent
  ]
})
export class SharedAppModule { }
