import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  tableData: any[] = [];
  newData: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.tableData = this.dataService.getTableData();
  }

  deleteRow(index: number): void {
    this.tableData.splice(index, 1);
    this.dataService.updateTableData(this.tableData);
  }

  updateRow(index: number): void {
    this.dataService.updateTableData(this.tableData);
  }
}
