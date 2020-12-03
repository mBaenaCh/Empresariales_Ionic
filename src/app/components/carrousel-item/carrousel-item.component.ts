import { Component, OnInit } from '@angular/core';
import {NetCoreService} from 'src/app/services/net-core.service'

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
  id:string="MCO574572313"
   name:string;
   rating:number;
   images: Array<any>=[];
  constructor(private netCore:NetCoreService) { }

  ngOnInit() {
    this.netCore.getItemId(this.id).subscribe((resp:any)=>{
      this.name = resp.name;
      this.images = resp.pictures;
      this.rating = resp.rating;
    });
  }


}
