import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss'],
})
export class BuyItemComponent implements OnInit {

  icons ={
    insurance:"/assets/img/icon-compras-seguras.svg",
    quality:"/assets/img/icon-calidad-garantizada.svg",
    payments:"/assets/img/icon-multiples-medios-pago.svg"

  }
  constructor() { }

  ngOnInit() {}

}
