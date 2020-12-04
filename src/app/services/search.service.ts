
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  baseURL = 'https://api.mercadolibre.com/sites/MCO/search?q=';
  URL = 'https://api.mercadolibre.com/items/';
  baseURLdotCore='http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/search?q=';
  uri='http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/item/';
  query : any;
  array: any[] = [];
  id: any;

  constructor(private http: HttpClient) {}
  
  getItems(query): Observable<any> {
    console.log(`${this.baseURL}`+`${query}`);
    return this.http.get(`${this.baseURL}${query}`);
  }

  getItemDetails( query:any): Observable<any> {

    return this.http.get(`${this.URL}${query}`);

  }

  getArray(){
    return this.array;
  }

  setArray(data){
    this.array = data;
  }

  setId(data){
    this.id = data;
  }
  
  getId(){
    return this.id;
  }
}
