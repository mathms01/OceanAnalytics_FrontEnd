import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';

@Component({
  selector: 'month-selector',
  imports: [MatFormFieldModule, MatInputModule, MatOption, MatSelectModule, NgFor, ReactiveFormsModule],
  templateUrl: './month-selector.component.html',
  styleUrl: './month-selector.component.scss',
})
export class MonthSelectorComponent {
  filterForm: FormGroup;
  @Output() monthChanged = new EventEmitter<string>();

  months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      month: [null],
    });
  }

  onMonthChange(selectedMonth: string): void {
    this.monthChanged.emit(selectedMonth); 
  }
}
