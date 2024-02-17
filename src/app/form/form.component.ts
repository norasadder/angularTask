import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-row',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formData: any = {};

  constructor(private dataService: DataService) {}

  addData(): void {
    if (
      this.formData.firstName &&
      this.formData.secondName &&
      this.formData.finalName &&
      this.formData.age
    ) {
      this.dataService.addToTable(this.formData);
      this.formData = {};
    } else {
      window.alert('Please fill all the blancks');
    }
  }
}
