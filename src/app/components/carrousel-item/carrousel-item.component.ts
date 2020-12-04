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
   id_seller:string;
   name:string;
   rating:number;
   images: Array<any>=[];
  constructor(private item:SearchService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    //id del vendedor obtenido desde el servicio
    this.id_seller = this.item.getSellerId();
    console.log(this.id_seller);
    //comparacion de id del vendedor para comprobar que api consumir
    // para los de .ner
    if(this.id_seller=="BST13579ALV"){
      this.item.getItemIdNetCore(this.id).subscribe((resp:any)=>{
        this.name = resp.name;
        this.images = resp.pictures;
        this.rating = resp.rating;
      });
    }
     //para los de django 
    else if(this.id_seller=="el de django si lo ponen"){
      this.item.getItemDetails(this.id).subscribe((resp:any)=>{
        this.name = resp.name;
        this.images = resp.pictures;
        this.rating = resp.rating;
      });
    }
    //para los de node
    else if(this.id_seller=="el de node si lo ponen"){
      this.item.getItemDetails(this.id).subscribe((resp:any)=>{
        this.name = resp.name;
        this.images = resp.pictures;
        this.rating = resp.rating;
      });
    }
    //esta seria de prueba con la de mercadolibre
    else {
      this.item.getItemDetails(this.id).subscribe((resp:any)=>{
        this.name = resp.name;
        this.images = resp.pictures;
        this.rating = resp.rating;
      });
    }
  }


}
