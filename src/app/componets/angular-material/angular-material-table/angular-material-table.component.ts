import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LengthPipe } from '../../../shared/pipes/length.pipe';
import { dataInterface } from '../../../shared/interface/data.interface';

@Component({
  selector: 'app-angular-material-table',
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    LengthPipe,
  ],
  templateUrl: './angular-material-table.component.html',
  styleUrl: './angular-material-table.component.scss',
})
export class AngularMaterialTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [
    // '#',
    'name',
    'companyName',
    'email',
    'tel',
    'checkboxes',
    'location',
    'comment',
  ];
  @Input() data: dataInterface[] = [];

  dataSource!: MatTableDataSource<dataInterface>;

  @ViewChild(MatTable) table!: MatTable<dataInterface>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public httpService: HttpService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
