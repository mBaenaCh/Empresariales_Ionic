
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
  baseURLdjango = 'http://development.eba-2veq4gdy.us-west-2.elasticbeanstalk.com/django_api/search/?q=';
  query : any;
  array: any[] = [];
  id: any;

  constructor(private http: HttpClient) {}
  
  getItems(query): Observable<any> {
    console.log(`${this.baseURL}`+`${query}`);
    return this.http.get(`${this.baseURL}${query}`);
  }

  getItemsNetCore(query): Observable<any> {
    console.log(`${this.baseURLdotCore}`+`${query}`);
    return this.http.get(`${this.baseURLdotCore}${query}`);
  }

  getItemsDjango(query): Observable<any> {
    console.log(`${this.baseURLdjango}`+`${query}`);
    return this.http.get(`${this.baseURLdjango}${query}`);
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

  getId(){
    return this.id;
  }

  setId(data){
    this.id = data;
  }
}
