import { Component, Input } from '@angular/core';

@Component({
  selector: 'tooltip',
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  content: string = '';
  position: { top: string; left: string } = { top: '0px', left: '0px' };
  visible: boolean = false;

  updateTooltipContent(content: string, event: any): void {
    this.content = content;
    this.position = {
      top: `${event.originalEvent.clientY + 10}px`, // Position near the pointer
      left: `${event.originalEvent.clientX + 10}px`,
    };
    this.visible = true;
  }

  hideTooltip(): void {
    this.visible = false;
  }
}
