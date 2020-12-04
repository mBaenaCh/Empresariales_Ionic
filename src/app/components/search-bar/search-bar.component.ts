import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [Keyboard]
})
export class SearchBarComponent implements OnInit {
  search:any;
  items: any[] = [];
  constructor(private searchService:SearchService, private keyboard:Keyboard, private router: Router) { }

  ngOnInit() {}

  generarItems():void{
    this.searchService.getItems(this.search).subscribe((data) => {
      //location.reload();
      console.log(data);
      this.items = data.results;
      console.log(this.items);
      this.searchService.setArray(this.items);
      this.search="";
      this.keyboard.hide();
      this.router.navigateByUrl('search');
  });

}

}
