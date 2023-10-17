import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TABLE_DATA } from './table-data'; // Импортируйте ваши данные

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columnNames: { [key: string]: string } = {
  column1:  'Product Code',
  column2:  'Name',
  column3:  'Unit',
  column4:  'Price',
  column5:  'Availability',
  column6:  'Action'
}
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5', 'column6'];
  dataSource = new MatTableDataSource(TABLE_DATA);

  ngOnInit() {

  }

}
