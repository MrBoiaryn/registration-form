import { Component, Input, OnInit } from '@angular/core';
import { dataInterface } from '../../../shared/interface/data.interface';
import { HttpService } from '../../../shared/services/http.service';
import { LengthPipe } from '../../../shared/pipes/length.pipe';

@Component({
  selector: 'app-bootstrap-table',
  imports: [LengthPipe],
  templateUrl: './bootstrap-table.component.html',
  styleUrl: './bootstrap-table.component.scss',
})
export class BootstrapTableComponent implements OnInit {
  @Input() data: dataInterface[] = [];
  // data: dataInterface[] = [];

  constructor(public httpService: HttpService) {}

  ngOnInit(): void {
    this.readData();
  }

  readData() {
    this.httpService.readData().subscribe((res) => {
      this.data = res;
    });
  }
}
