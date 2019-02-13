import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent} from './calculator/calculator.component';
import {Route, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

