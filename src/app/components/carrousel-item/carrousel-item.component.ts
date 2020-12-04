import { Component, OnInit } from '@angular/core';
import { SearchService} from 'src/app/services/search.service'

import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private item:SearchService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.item.getItemDetails(this.id).subscribe((resp:any)=>{
      this.name = resp.name;
      this.images = resp.pictures;
      this.rating = resp.rating;
    });
  }


}
