import { Component, OnInit } from '@angular/core';
import { SearchService} from 'src/app/services/search.service'

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss'],
})
export class BuyItemComponent implements OnInit {

  id:string;
  id_seller:string;
  price:number;
  currency:string; 
  icons ={
    insurance:"/assets/img/icon-compras-seguras.svg",
    quality:"/assets/img/icon-calidad-garantizada.svg",
    payments:"/assets/img/icon-multiples-medios-pago.svg"

  }
  constructor(private item:SearchService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    //id del vendedor obtenido desde el servicio
    this.id_seller = this.item.getSellerId();
    //comparacion de id del vendedor para comprobar que api consumir
    // para los de .ner
   /* if(this.id_seller=="BST13579ALV"){
      this.item.getItemIdNetCore(this.id).subscribe((resp:any)=>{
        this.price = resp.price;
        this.currency = resp.currency;
      })
    }
    //para los de node
    else if(this.id_seller=="el de node si lo ponen"){
      this.item.getItemIdNetCore(this.id).subscribe((resp:any)=>{
        this.price = resp.price;
        this.currency = resp.currency;
      })
    }
    //para los de django 
    else if(this.id_seller=="el de django si lo ponen"){
      this.item.getItemIdNetCore(this.id).subscribe((resp:any)=>{
        this.price = resp.price;
        this.currency = resp.currency;
      })
    }*/
    //esta seria de prueba con la de mercadolibre
    //else {
      this.item.getItemDetails(this.id).subscribe((resp:any)=>{
        this.price = resp.price;
        this.currency = resp.currency_id;
      })
    //}
    
  }

}
