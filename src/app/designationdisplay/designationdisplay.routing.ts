import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../main-layout/main-layout.component';

import { DesignationdisplayComponent } from './designationdisplay.component';
const routes: Routes = [
  {
    path: 'design',
    component: MainLayoutComponent,
    children: [
      { path: '', component:DesignationdisplayComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesigRoutingModule { }
