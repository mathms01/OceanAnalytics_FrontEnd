import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';

@Component({
  selector: 'month-selector',
  imports: [MatFormFieldModule, MatInputModule, MatOption, MatSelectModule,  NgFor, ReactiveFormsModule, ],
  templateUrl: './month-selector.component.html',
  styleUrl: './month-selector.component.scss',
})
export class MonthSelectorComponent {
  filterForm: FormGroup;
  months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      month: [null],
    });
  }

  onSubmit() {
    const selectedMonth = this.filterForm.get('month')?.value;
  }
}
