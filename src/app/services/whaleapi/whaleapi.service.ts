import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WhaleInterface } from '../../models/whale.interface';
import { catchError, map, Observable, of } from 'rxjs';

const baseUrl = "http://localhost:7018/api/GetWhalesData";

@Injectable({
  providedIn: 'root'
})
export class WhaleService {
  constructor(private http: HttpClient) {}

 getWhales(): Observable<WhaleInterface[]>{
    return this.http.get<WhaleInterface[]>(baseUrl);
  }
  
  getWhalesWithFilters(queryParams: any): Observable<WhaleInterface[]> {
    const params = this.setParameter(queryParams);

    console.log(params);

    return this.http.get<WhaleInterface[]>(baseUrl, { params });
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
