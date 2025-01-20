import { Component , AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { AngularOpenlayersModule } from 'ng-openlayers';
import { WhaleInterface } from '../../models/whale.interface';
import { WhaleService } from '../../services/whaleapi/whaleapi.service';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
  selector: 'app-map',
  imports: [AngularOpenlayersModule, NgIf, TooltipComponent, NgFor, FilterComponent],
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

  onFiltersChanged(filters: any): void {
    console.log('Filters applied:', filters);
    
    const { scientificName, eventDate, latitude, longitude } = filters;
  
    const queryParams: any = {};
    if (scientificName) queryParams.scientificName = scientificName;
    if (eventDate) {
      const year = eventDate.getFullYear();
      const month = String(eventDate.getMonth() + 1).padStart(2, '0');
      const day = String(eventDate.getDate()).padStart(2, '0');
      queryParams.eventDate = `${year}-${month}-${day}`;
    }
    if (latitude) queryParams.latitude = latitude;
    if (longitude) queryParams.longitude = longitude;

    console.log(queryParams.eventDate);
  
    this.whaleApi.getWhalesWithFilters(queryParams).subscribe({
      next: (data) => {
        this.whalesList = data;
        this.createFeatures();

        this.addTooltipHandling();
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
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
