import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class WhaleImageService {
  private sparqlEndpoint = 'https://query.wikidata.org/sparql';

  constructor(private http: HttpClient) {}

  getWhaleImage(scientificName: string): Observable<string | null> {
    const query = `
      SELECT ?image WHERE {
        ?whale wdt:P225 "${scientificName}".
        ?whale wdt:P18 ?image.
      }
      LIMIT 1
    `;
    
    const url = `${this.sparqlEndpoint}?query=${encodeURIComponent(query)}&format=json`;

    return this.http.get<any>(url).pipe(
      map(response => {
        const bindings = response.results.bindings;
        return bindings.length > 0 ? bindings[0].image.value : null;
      })
    );
  }
}
