import { Routes } from '@angular/router';
import { BootstrapLayoutComponent } from './componets/bootstrap/bootstrap-layout/bootstrap-layout.component';
import { AngularMaterialLayoutComponent } from './componets/angular-material/angular-material-layout/angular-material-layout.component';

export const routes: Routes = [
  { path: 'angular', component: AngularMaterialLayoutComponent },
  { path: 'bootstrap', component: BootstrapLayoutComponent },
  { path: '', redirectTo: '/angular', pathMatch: 'full' },
];
