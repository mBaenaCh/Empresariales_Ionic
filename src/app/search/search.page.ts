import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listedItems: any[] = [];  
  constructor(private searchService : SearchService) { }

  ngOnInit() {
    this.listedItems = this.searchService.getArray();
    console.log(this.listedItems);
  }

  sendItemId(id: String){
    console.log(id);
    return this.searchService.setId(id);
  }
}
