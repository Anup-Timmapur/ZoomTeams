import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatExpansionModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';

import { DesignationdisplayComponent } from './designationdisplay/designationdisplay.component';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { Routes, RouterModule } from '@angular/router';
import { DesignationModule } from './designationdisplay/designationdisplay.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,

    MainLayoutComponent,

    DesignationdisplayComponent,



  ],
  imports: [
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
        FormsModule,
        InMemoryWebApiModule,
        NgbModule,
        ReactiveFormsModule,
        routing,
        LoginModule,
        DashboardModule,
        HomeModule,
        DesignationModule,
        DashboardModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
