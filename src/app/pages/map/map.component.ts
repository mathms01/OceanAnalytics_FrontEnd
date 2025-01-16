import { Component , AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { AngularOpenlayersModule } from 'ng-openlayers';
import { WhaleInterface } from '../../models/whale.interface';
import { WhaleService } from '../../services/whaleapi/whaleapi.service';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map',
  imports: [AngularOpenlayersModule, NgIf, TooltipComponent, NgFor],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapComponent implements AfterViewInit {
  isBrowser: boolean;
  whalesList: WhaleInterface[] = [];
  features: Feature[] = [];

  @ViewChild('tooltipComponent') tooltipComponent!: TooltipComponent;
  @ViewChild('map', { static: false }) map!: any;
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private whaleApi: WhaleService, private cdr: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    this.whaleApi.getWhales().subscribe( {
      next: (data: WhaleInterface[]) => {
        this.whalesList = data;
        
        this.createFeatures();
        console.log(this.features);

        this.addTooltipHandling();
        this.cdr.detectChanges();
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
        console.log('complete whales fetch');
      }
    })      
  }

  private addTooltipHandling(): void {
    if (this.map)
    {
      const olMap = this.map.instance;
      olMap.on('pointermove', (event: any) => {
        const features = olMap.getFeaturesAtPixel(event.pixel);
  
        if (features?.length > 0) {
          const feature = features[0];
          const whale = feature.get('values') as WhaleInterface;
  
          if (whale)
          {
            this.tooltipComponent.updateTooltipContent(whale.scientificName || 'Unknown', event);
          }
        } else {
          this.tooltipComponent.hideTooltip();
        }
      });
    }
  }

  
  private createFeatures(): void {
    this.features = this.whalesList.map((whale) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([whale.longitude, whale.latitude])),
      });
      feature.set('values', whale);
      return feature;
    });

    this.cdr.detectChanges();
  }
}
