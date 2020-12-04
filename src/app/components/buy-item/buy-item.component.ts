import { Component, OnInit } from '@angular/core';
import {NetCoreService} from 'src/app/services/net-core.service'

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss'],
})
export class BuyItemComponent implements OnInit {

  id:string = "MCO574572313";
  price:number;
  currency:string; 
  icons ={
    insurance:"/assets/img/icon-compras-seguras.svg",
    quality:"/assets/img/icon-calidad-garantizada.svg",
    payments:"/assets/img/icon-multiples-medios-pago.svg"

  }
  constructor(private netcore:NetCoreService) { }

  ngOnInit() {
    this.netcore.getItemId(this.id).subscribe((resp:any)=>{
      this.price = resp.price;
      this.currency = resp.currency;
    })
  }

}
