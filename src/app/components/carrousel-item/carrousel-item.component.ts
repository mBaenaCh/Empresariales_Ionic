import { Component, OnInit } from '@angular/core';

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
  images ={
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7zQNAOaTYKOQPb4YTF6TpcN_p_Ao2PBkujh7QK7BofjkJcMv8XwCpDmyfU1Wz7BFDfi3mk0S&usqp=CAc",
    image2:"https://hardzone.es/app/uploads-hardzone.es/2019/09/Mars-Gaming-MKTKL-1-1024x536.jpg",
    image3:"https://http2.mlstatic.com/D_NQ_NP_889258-MCO43801946509_102020-O.webp"
  }
  constructor() { }

  ngOnInit() {}

}
