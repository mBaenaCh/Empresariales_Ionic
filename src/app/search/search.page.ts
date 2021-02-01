import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NetCoreService } from '../services/net-core.service';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search: any;
  listedItems: any[] = [];
  listedItems2: any[] = [];
  listedItems3: any[] = [];
  vectorBusqueda:any[] = [];
  sellerId: string ="";

  nameArray: String[] = [];
  c: Number = 0; 

  constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.listedItems3=[];
    this.route.params.subscribe(params => {
      this.search = params['search'];
    });
   this.searchService.getItemsNetCore(this.search).subscribe((data) => {
      console.log(data);
      this.vectorBusqueda = data.items;
      this.sellerId = data.seller.id;
      this.listedItems2=this.vectorBusqueda.concat(this.listedItems);
      console.log(this.vectorBusqueda);
      console.log(this.listedItems2);
    });
    this.searchService.getItemsDjango(this.search).subscribe((data) => {
      console.log(data);
      this.vectorBusqueda = data.items;
      this.listedItems3=this.vectorBusqueda.concat(this.listedItems2);
      console.log(this.listedItems3);
    });

  }
  sendItemId(id: String,seller_id:String) {
    this.router.navigate(['/item-detail', id]);
    this.searchService.setSellerId(seller_id);
  }

  addCar(name: String){
    this.searchService.setItemCar(name);
  }
  
  homeLink(){
    this.router.navigate(['/home'] );
  }


}