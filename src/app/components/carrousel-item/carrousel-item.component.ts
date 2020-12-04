import { Component, OnInit } from '@angular/core';
import {NetCoreService} from 'src/app/services/net-core.service'
import {SearchService} from 'src/app/services/search.service'

@Component({
  selector: 'app-carrousel-item',
  templateUrl: './carrousel-item.component.html',
  styleUrls: ['./carrousel-item.component.scss'],
})
export class CarrouselItemComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
   id:string;
   name:string;
   rating:number;
   images: Array<any>=[];
  constructor(private netCore:NetCoreService, private searchService : SearchService) { }

  ngOnInit() {
    this.id = this.searchService.getId();
    console.log(this.id);
    this.searchService.getItemDetails(this.id).subscribe((resp:any)=>{
      this.name = resp.title;
      this.images = resp.pictures;
      this.rating = resp.rating;
      
    });
  }


}
