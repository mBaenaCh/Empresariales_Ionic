import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss'],
})
export class CategoryHomeComponent implements OnInit {

  

  imagesTags={
    img1: "assets/img/icon-ropa.svg",
    img2: "assets/img/icon-deporte.svg",
    img3: "assets/img/icon-mueble.svg",
    img4: "assets/img/icon-computadores.svg",
    img5: "assets/img/icon-celular.svg",
    img6: "assets/img/icon-tv.svg",
    img7: "assets/img/icon-electrodomesticos.svg",
    img8: "assets/img/icon-carro.svg",
    img9: "assets/img/banner-auxilar-ordenadores.png"
  }

  constructor() { }

  ngOnInit() {}

}
