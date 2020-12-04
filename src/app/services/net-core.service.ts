import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NetCoreService {

  uri='http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/item/';
  constructor(private http: HttpClient) { }

  getItemId(id: String){
    let header = new HttpHeaders()
    return this.http.get(this.uri+ id);
  }

}
