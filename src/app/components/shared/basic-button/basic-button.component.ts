import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'basic-button',
  imports: [NgClass, RouterLink, MatButtonModule],
  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss'
})
export class BasicButtonComponent {
  @Input() color: string = 'accent'; 
  @Input() routerLink?: string;
  @Output() clickEvent = new EventEmitter<Event>(); 

  handleClick(event: Event) {
    if (!this.routerLink) {
      this.clickEvent.emit(event); 
    }
  }
}
