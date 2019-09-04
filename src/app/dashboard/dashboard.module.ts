import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatExpansionModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
DashboardRoutingModule,
CommonModule,
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
                   MatSidenavModule,
                   MatSliderModule,
                    MatSlideToggleModule,
                     MatSnackBarModule,
                      MatSortModule,
                       MatTableModule,
                        MatTabsModule,
                         MatTooltipModule,
                         MatTreeModule,
                        DashboardRoutingModule

  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
