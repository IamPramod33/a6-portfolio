import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgwWowModule } from 'ngx-wow';

const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),NgwWowModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
