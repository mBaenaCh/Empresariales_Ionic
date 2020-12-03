import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  search: any = "";
  items: any[] = [];
  constructor(private searchService: SearchService) { }

  generarItems(): void {
    this.searchService.getItems(this.search).subscribe((data) => {
      //console.log(data);
      this.items = data.results;
      //console.log(this.items);
      this.searchService.setArray(this.items);
      console.log(this.searchService.getArray());
      this.search = "";
    });
    
  }
}
