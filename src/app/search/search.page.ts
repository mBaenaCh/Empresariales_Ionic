import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import {ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listedItems: any[] = [];  
  constructor(private searchService : SearchService, private ref: ChangeDetectorRef) {

    
  }

  ngOnInit() {
    this.setListedItems(this.searchService.getArray());
    console.log(this.listedItems);
    
    this.ref.detectChanges();
  }

  setListedItems(data){
    this.listedItems = data;
  }

  sendItemId(id: String){
    console.log(id);
    return this.searchService.setId(id);
  }
}
