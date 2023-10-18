import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TABLE_DATA, TableDataKeys, TableDataKeysArray} from './table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columnNames: Record<TableDataKeys, string >= {
    productCode: 'ProductCode',
    name: 'Name',
    unit: 'Unit',
    price: 'Price',
    availability: 'Availability',
    action: 'Action'
  }
  displayedColumns: TableDataKeysArray = ["productCode", "name", "unit", "price", "availability", "action"]
  dataSource = new MatTableDataSource(TABLE_DATA);

  ngOnInit() {
  }
}
