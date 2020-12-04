import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  //baseURL='https://api.mercadolibre.com/sites/MCO/search?q=';
  //URL='https://api.mercadolibre.com/items/';
  baseURLdotCore='http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/search?q=';
  URL='https://api.mercadolibre.com/items/';
  query:any;
  constructor(private http: HttpClient) { 
    
  }

  getItems(query): Observable<any> {
    console.log(`${this. baseURLdotCore}${query}`);
    return this.http.get(`${this.baseURLdotCore}${query}`);

  }

  getItemDetails( query:any): Observable<any> {

    return this.http.get(`${this.URL}${query}`);

  }
}
