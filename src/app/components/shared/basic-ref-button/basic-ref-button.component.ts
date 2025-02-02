import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'basic-ref-button',
  imports: [NgClass],
  templateUrl: './basic-ref-button.component.html',
  styleUrl: './basic-ref-button.component.scss'
})
export class BasicRefButtonComponent {
  @Input() href: string = '#'; 
  @Input() color: string = 'accent'; 
  @Input() target: string = '_blank';
}
