import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-angular-material-table',
  standalone: true,
  imports: [],
  templateUrl: './angular-material-table.component.html',
  styleUrl: './angular-material-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularMaterialTableComponent { }
