import { Component } from '@angular/core';
import { BootstrapFormComponent } from '../bootstrap-form/bootstrap-form.component';
import { BootstrapTableComponent } from '../bootstrap-table/bootstrap-table.component';

@Component({
  selector: 'app-bootstrap-layout',
  imports: [BootstrapFormComponent, BootstrapTableComponent],
  templateUrl: './bootstrap-layout.component.html',
  styleUrl: './bootstrap-layout.component.scss',
})
export class BootstrapLayoutComponent {}
