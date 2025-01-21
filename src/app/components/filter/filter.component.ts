import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MonthSelectorComponent } from '../month-selector/month-selector.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MonthSelectorComponent,
    MatButtonToggleModule
  ],
})
export class FilterComponent {
  filterForm: FormGroup;
  viewMode: string = 'month';

  @Output() filtersChanged = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      scientificName: [''],
      eventDate: [new Date()],
      latitude: [null],
      longitude: [null],
      month: [null],
    });
  }

  applyFilters(): void {
    const filters = this.filterForm.value;
    this.filtersChanged.emit(filters);
  }

  resetFilters(): void {
    this.filterForm.reset();
    this.applyFilters(); 
  }

  onMonthChanged(month: string): void {
    this.filterForm.patchValue({ month });
  }
}
