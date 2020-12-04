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
  vectorBusqueda:any[] = [];
  sellerId: string ="";
  constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.search = params['search'];
    });
    this.searchService.getItemsNetCore(this.search).subscribe((data) => {
      console.log(data);
      this.vectorBusqueda = data.items;
      this.sellerId = data.seller.id;
      this.listedItems.concat(this.vectorBusqueda);
      console.log(this.listedItems);
    });
    /*this.searchService.getItemsDjango(this.search).subscribe((data) => {
      console.log(data);
      this.vectorBusqueda = data.items;
      this.listedItems.concat(this.vectorBusqueda);
      console.log(this.listedItems);
    });*/

  }
  sendItemId(id: String,seller_id:String) {
    this.router.navigate(['/item-detail', id]);
    this.searchService.setSellerId(seller_id);
  }
}