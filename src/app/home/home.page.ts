import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  search: any = "";
  items: any[] = [];
  constructor(private searchService: SearchService, private router: Router) { }


    
}
