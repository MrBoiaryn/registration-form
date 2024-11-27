import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  standalone: true,
  imports: [],
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularMaterialComponent { }
