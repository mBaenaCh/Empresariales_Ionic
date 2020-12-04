import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search:any;
  listedItems: any[] = [];  

  constructor(private searchService : SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.search = params ['search'];
    });
    this.searchService.getItems(this.search).subscribe((data) => {
      console.log(data);
      this.listedItems= data.results;
      console.log(this.listedItems);
  });

  sendItemId(id: String){
    console.log(id);
    return this.searchService.setId(id);
  }
}
