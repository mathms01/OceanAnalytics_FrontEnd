import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WhaleInterface } from '../../models/whale.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhaleService {

  constructor(private http: HttpClient) {}

 getWhales(): Observable<WhaleInterface[]>{
    return this.http.get<WhaleInterface[]>('http://localhost:7018/api/GetWhalesData');
 }
}
