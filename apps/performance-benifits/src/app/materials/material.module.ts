import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  exports: [
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatGridListModule,
    MatProgressBarModule
  ],


})

export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule,
    };
  }
}
