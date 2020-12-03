import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchText: any = "";
  items: any[] = [];
  constructor(private searchService: SearchService) { }

  generarItems(): void {
    this.searchService.getItems(this.searchText).subscribe((data) => {
      console.log(data);
      this.items = data.results;
      console.log(this.items);

      this.searchText = "";
    });
  }
}
