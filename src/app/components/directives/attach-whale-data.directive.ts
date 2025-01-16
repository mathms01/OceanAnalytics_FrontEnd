import { Directive, Input, OnInit } from '@angular/core';
import Feature from 'ol/Feature';

@Directive({
  selector: '[attachWhaleData]',
})
export class AttachWhaleDataDirective implements OnInit {

  @Input() feature!: Feature;
  @Input() whaleData!: any;

  ngOnInit(): void {
    if (this.feature && this.whaleData) {
      this.feature.set('data', this.whaleData);
    }
  }

}
