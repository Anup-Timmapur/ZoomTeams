import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { DesignationdisplayComponent } from './designationdisplay/designationdisplay.component';
import { LoginComponent } from './login/login.component';



const arr: Routes = [
  { path: " ", component: LoginComponent},
  { path: "home", component: HomeComponent},
  { path: "design", component: DesignationdisplayComponent},
  { path: "dash", component: DashboardComponent}
  // { path: "", component: HomeComponent},
];

export const routing = RouterModule.forRoot(arr);
