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
    this.item.getItemDetails(this.id).subscribe((resp:any)=>{
      this.price = resp.price;
      this.currency = resp.currency;
    })
  }

}
