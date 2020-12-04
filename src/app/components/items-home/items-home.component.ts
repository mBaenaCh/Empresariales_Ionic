import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-home',
  templateUrl: './items-home.component.html',
  styleUrls: ['./items-home.component.scss'],
})
export class ItemsHomeComponent implements OnInit {

  imagesItems={
    img1:"assets/img/banner-auxilar-ordenadores.png",
    img2:"assets/img/banner-auxiliar-bicicletas.png",


    img3:"assets/img/producto2.png",
    img4:"assets/img/producto1.png",
    img5:"assets/img/producto3.png",
    img6:"assets/img/producto4.png",
  }

  constructor() { }

  ngOnInit() {}

}
