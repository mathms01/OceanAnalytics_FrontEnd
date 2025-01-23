import { Component , AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { WhaleInterface } from '../../models/whale.interface';
import { WhaleService } from '../../services/whaleapi/whaleapi.service';
import "@arcgis/map-components/dist/components/arcgis-map";
import { FilterComponent } from '../../components/filter/filter.component';
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';




@Component({
  selector: 'app-map',
  imports: [NgIf, FilterComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapComponent implements AfterViewInit {
  isBrowser: boolean;
  whalesList: WhaleInterface[] = [];
  private mapView!: MapView;
  private graphicsLayer = new GraphicsLayer();
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private whaleApi: WhaleService, private cdr: ChangeDetectorRef) {
    esriConfig.assetsPath = 'https://js.arcgis.com/4.31/';

    setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");
    this.graphicsLayer = new GraphicsLayer();
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initializeMap();
    }

    this.whaleApi.getWhales().subscribe({
      next: (data: WhaleInterface[]) => {
        this.whalesList = data;
        this.updateMarkers();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete whales fetch');
      }
    });
  }

  onFiltersChanged(filters: any): void {
    const { scientificName, eventDate, latitude, longitude, month } = filters;
  
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
    if (month) {
      queryParams.month = month;
     };
  
    this.whaleApi.getWhalesWithFilters(queryParams).subscribe({
      next: (data) => {
        this.whalesList = data;
        this.updateMarkers();
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }

  private initializeMap(): void {
    const map = new Map({
      basemap: 'oceans'
    });

    this.mapView = new MapView({
      container: 'viewDiv', 
      map: map,
      center: [-30, 10], 
      zoom: 3 
    });

    map.add(this.graphicsLayer);

    this.updateMarkers();
  }

  private updateMarkers(): void {
    this.graphicsLayer.removeAll();
  
    this.whalesList.forEach((whale) => {
      const graphic = this.createWhaleMarker(whale);
      this.graphicsLayer.add(graphic);
    });
  }

  private createWhaleMarker(whale: WhaleInterface): Graphic {
      const point = new Point({
        longitude: whale.longitude,
        latitude: whale.latitude,
      });

      const markerSymbol = {
        type: 'simple-marker', 
        color: 'blue', 
        outline: {
          color: 'white', 
          width: 1, 
        },
      };

      const attributes = {
        species: whale.scientificName,
        observedDate: whale.eventDate,
        coordinate: whale.longitude + " : " + whale.latitude, 
      };

      const popupTemplate = {
        title: `{species}`,
        content: `
          <b>Species:</b> {species}<br>
          <b>Observed Date:</b> {observedDate | date: 'yyyy-MM-dd'}<br>
          <b>Coordinate : </b> {coordinate}
        `,
      };

      return new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate,
      });
  }
}
