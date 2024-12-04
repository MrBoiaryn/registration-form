import { Component } from '@angular/core';
import { AngularMaterialFormComponent } from '../angular-material-form/angular-material-form.component';
import { AngularMaterialTableComponent } from '../angular-material-table/angular-material-table.component';

@Component({
  selector: 'app-angular-material-layout',
  standalone: true,
  imports: [AngularMaterialFormComponent, AngularMaterialTableComponent],
  templateUrl: './angular-material-layout.component.html',
  styleUrl: './angular-material-layout.component.scss',
})
export class AngularMaterialLayoutComponent {}
