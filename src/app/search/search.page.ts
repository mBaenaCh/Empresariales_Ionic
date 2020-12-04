import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search: any;
  listedItems: any[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.search = params['search'];
    });
    this.searchService.getItems(this.search).subscribe((data) => {
      console.log(data);
      this.listedItems = data.results;
      console.log(this.listedItems);
    });

  }
  sendItemId(id: String,seller_id:String) {
    this.router.navigate(['/item-detail', id]);
    this.searchService.setSellerId(seller_id);
  }
}