import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items: any[] = [];
  constructor(private searchService : SearchService) { }

  ngOnInit() {
    
  }

}
