import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErroLoadingMicroComponent } from './errors/erro-loading-micro/erro-loading-micro.component';



const routes: Routes = [
  {
    path: '',
    component: ErroLoadingMicroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorModule { }
