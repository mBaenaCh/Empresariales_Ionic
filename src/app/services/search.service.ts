
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  baseURL = 'https://api.mercadolibre.com/sites/MCO/search?q=';
  URL = 'https://api.mercadolibre.com/items/';
  
  baseURLdotCore='http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/search?q=';
  baseURLdjango = 'http://development.eba-2veq4gdy.us-west-2.elasticbeanstalk.com/django_api/search/?q=';
  baseURLdotCoreitem='http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/item/';

  query : any;
  array: any[] = [];
  id: any;
  counter: Number
  name: String;
  //private carrito = [];
  //private carritoNroItems = new BehaviorSubject(0);

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
  getItemIdNetCore(id: String){
  
    return this.http.get(`${this.baseURLdotCoreitem}${id}`);
  }

  getArray(){
    return this.array;
  }

  setArray(data){
    this.array = data;
  }

  getSellerId(){
    return this.id;
  }

  setSellerId(data){
    this.id = data;
  }

  
  setItemCar(name){
    this.name = name;
  }


  getItemCar(){
 return this.name;
  }

  /*agregarProducto(producto){
      let agregado = false;
      for(let p of this.carrito){
        if(p.name === producto.name){
          p.cantidad += 1;
          agregado = true;
          break;
        }
      }
      if(!agregado){
        this.carrito.push(producto);
      }

      this.carritoNroItems.next(this.carritoNroItems.value + 1);

  }*/
}
