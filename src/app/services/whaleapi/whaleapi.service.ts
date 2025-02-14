import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WhaleInterface } from '../../models/whale.interface';
import { map, Observable } from 'rxjs';
import { CONFIG } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class WhaleService {
  constructor(private http: HttpClient) {}

 getWhales(): Observable<WhaleInterface[]>{
    return this.http.get<WhaleInterface[]>(CONFIG.baseUrl + CONFIG.endpoints.getWhalesData);
  }

  getWhaleImage(name: string): Observable<string>{
    const url = `${CONFIG.baseUrl}${CONFIG.endpoints.getWhaleImage}?scientificName=${encodeURIComponent(name)}`;

    return this.http.get<{ imageUrl: string }>(url).pipe(
      map(response => response.imageUrl)
    );
  }
  
  getWhalesWithFilters(queryParams: any): Observable<WhaleInterface[]> {
    const params = this.setParameter(queryParams);

    console.log(params);

    return this.http.get<WhaleInterface[]>(CONFIG.baseUrl + CONFIG.endpoints.getWhalesData, { params });
  }

  private setParameter(routerParams: any): HttpParams {
    let queryParams = new HttpParams();
    for (const key in routerParams) {
      if (routerParams.hasOwnProperty(key) && routerParams[key] !== null) {
        queryParams=queryParams.set(key, routerParams[key]);
      }
    }
    return queryParams;
  }
}
