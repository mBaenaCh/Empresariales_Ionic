import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-home',
  templateUrl: './carrusel-home.component.html',
  styleUrls: ['./carrusel-home.component.scss'],
})
export class CarruselHomeComponent implements OnInit {
  imagesCarrusel={
    img1:"https://i.imgur.com/7GtD3Z4.png"
  }

  constructor() { }

  ngOnInit() {}

}
