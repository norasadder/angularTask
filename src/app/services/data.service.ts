import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private tableData: any[] = [
    { firstName: 'Nora', secondName: 'Ammar', finalName: 'Sadder', age: '22' },
  ];

  getTableData(): any[] {
    return this.tableData;
  }

  updateTableData(data: any[]): void {
    this.tableData = data;
    console.log(this.tableData);
  }

  addToTable(entry: any): void {
    this.tableData.push(entry);
    this.updateTableData(this.tableData);
    console.log(this.tableData);
  }

  updateTableEntry(index: number, updatedData: any): void {
    this.tableData[index] = updatedData;
    console.log(this.tableData);
    this.updateTableData(this.tableData);
  }
}
