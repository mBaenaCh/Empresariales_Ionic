import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listedItems: any[] = [];  
  constructor(private searchService : SearchService, private router: Router) { }

  ngOnInit() {
    this.listedItems = this.searchService.getArray();
    console.log(this.listedItems);
  }

  sendItemId(id: String){
    console.log(id);
    this.searchService.setId(id);
    this.router.navigateByUrl('item-detail');
  }
}
