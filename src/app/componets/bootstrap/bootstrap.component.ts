import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BootstrapComponent { }
