import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-angular-material-table',
  imports: [],
  templateUrl: './angular-material-table.component.html',
  styleUrl: './angular-material-table.component.scss',
})
export class AngularMaterialTableComponent implements OnInit {
  constructor(public httpService: HttpService) {}

  ngOnInit(): void {
    this.readData();
  }

  readData(): void {
    this.httpService.readData();
  }
}
