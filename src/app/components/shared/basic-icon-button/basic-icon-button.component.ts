import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'basic-icon-button',
  imports: [MatIcon, MatButtonModule],
  templateUrl: './basic-icon-button.component.html',
  styleUrl: './basic-icon-button.component.scss'
})
export class BasicIconButtonComponent {
  @Input() icon: string = 'menu';
  @Output() action = new EventEmitter<void>();
}
