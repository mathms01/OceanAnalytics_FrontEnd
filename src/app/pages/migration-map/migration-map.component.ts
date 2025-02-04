import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { WhaleService } from '../../services/whaleapi/whaleapi.service';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

@Component({
  selector: 'migration-map',
  imports: [NgIf],
  templateUrl: './migration-map.component.html',
  styleUrl: './migration-map.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MigrationMapComponent implements AfterViewInit {
  isBrowser: boolean;
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
      next: () => {
        //this.whalesList = data;
        //this.updateMarkers();
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
    const { latitude, longitude, month } = filters;
  
    const queryParams: any = {};
    if (latitude) queryParams.latitude = latitude;
    if (longitude) queryParams.longitude = longitude;
    if (month) {
      queryParams.month = month;
     };
  
    this.whaleApi.getWhalesWithFilters(queryParams).subscribe({
      next: (data) => {
        //this.whalesList = data;
        //this.updateMarkers();
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
      container: 'viewMigrationDiv', 
      map: map,
      center: [-30, 10], 
      zoom: 3 
    });

    map.add(this.graphicsLayer);

    //this.updateMarkers();
  }

  // private updateMarkers(): void {
  //   this.graphicsLayer.removeAll();
  
  //   this.whalesList.forEach((whale) => {
  //     const graphic = this.createWhaleMarker(whale);
  //     this.graphicsLayer.add(graphic);
  //   });
  // }

  // private createWhaleMarker(whale: WhaleInterface): Graphic {
  //     const point = new Point({
  //       longitude: whale.longitude,
  //       latitude: whale.latitude,
  //     });

  //     const markerSymbol = {
  //       type: 'simple-marker', 
  //       color: 'blue', 
  //       outline: {
  //         color: 'white', 
  //         width: 1, 
  //       },
  //     };

  //   const attributes = {
  //       species: whale.scientificName,
  //       observedDate: new Date(whale.eventDate * 1000),
  //       coordinate: whale.longitude + " : " + whale.latitude, 
  //     };

  //     const popupTemplate = {
  //       title: `{species}`,
  //       content: `
  //         <b>Species:</b> {species}<br>
  //         <img class="rect-img" src="https://picsum.photos/id/0/367/267" alt="">
  //         <b>Observed Date:</b> <br> {observedDate}<br>
  //         <b>Coordinate : </b> <br> {coordinate}
  //       `,
  //     };

  //     return new Graphic({
  //       geometry: point,
  //       symbol: markerSymbol,
  //       attributes: attributes,
  //       popupTemplate: popupTemplate,
  //     });
  // }
}

