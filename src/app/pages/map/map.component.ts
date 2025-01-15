import { Component , AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgIf, NgFor } from '@angular/common';
import { AngularOpenlayersModule } from 'ng-openlayers';
import { WhaleInterface } from '../../models/whale.interface';
import { WhaleService } from '../../services/whaleapi/whaleapi.service';

@Component({
  selector: 'app-map',
  imports: [AngularOpenlayersModule, NgIf, NgFor],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  isBrowser: boolean;
  whalesList: WhaleInterface[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private whaleApi: WhaleService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    this.whaleApi.getWhales().subscribe( {
      next: (data: WhaleInterface[]) => {
          this.whalesList = data;
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })      

    if (this.isBrowser) {
      console.log('Carte initialisée dans un environnement client.');
    } else {
      console.log('Carte désactivée en environnement SSR.');
    }
  }
}
