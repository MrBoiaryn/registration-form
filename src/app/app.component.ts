import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AngularMaterialFormComponent } from './componets/angular-material/angular-material-form/angular-material-form.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, AngularMaterialFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'registration-form';

  isMaterial = true;

  setIsMaterial(isMaterial: boolean): void {
    this.isMaterial = isMaterial;
  }
}
