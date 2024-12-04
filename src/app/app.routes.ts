import { Routes } from '@angular/router';
import { AngularMaterialComponent } from './componets/angular-material/angular-material.component';
import { BootstrapLayoutComponent } from './componets/bootstrap/bootstrap-layout/bootstrap-layout.component';

export const routes: Routes = [
  { path: 'angular', component: AngularMaterialComponent },
  { path: 'bootstrap', component: BootstrapLayoutComponent },
];
