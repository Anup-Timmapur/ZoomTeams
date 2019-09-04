import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


import { MainLayoutComponent } from './main-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatExpansionModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatTreeModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    // hello
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
  MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
          MatDatepickerModule,
          MatDialogModule,
            MatDividerModule,
            MatGridListModule,
              MatIconModule,
              MatInputModule,
                MatListModule,
                MatMenuModule,
                MatNativeDateModule,
                  MatPaginatorModule,
                  MatProgressBarModule,
                    MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
        MatTooltipModule,
        MatTreeModule,

  ],
  exports: [
    MainLayoutComponent,

  ],
  declarations: [
    MainLayoutComponent,

  ]
})
export class LayoutModule { }
