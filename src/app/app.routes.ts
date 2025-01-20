import { Routes } from '@angular/router';
import { CalculatorComponent } from './+components/calculator/calculator.component';

export const routes: Routes = [
  { path: 'home', component: CalculatorComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" }
];
