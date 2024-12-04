import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-table',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-table.component.html',
  styleUrl: './bootstrap-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BootstrapTableComponent { }
