import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-home',
  templateUrl: './carrusel-home.component.html',
  styleUrls: ['./carrusel-home.component.scss'],
})
export class CarruselHomeComponent implements OnInit {
  imagesCarrusel={
    img1:"https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:04d62ba4-6ba8-4ee2-92be-6876727c41e6;version=0?component_id=47a04676-36a5-422b-93d6-e9e587b4d5b5&api_key=CometServer1&access_token=1606970075_urn%3Aaaid%3Asc%3AUS%3A04d62ba4-6ba8-4ee2-92be-6876727c41e6%3Bpublic_b58867c09da76f8f772e6fd8e1e8daa033ca6e90"
  }

  constructor() { }

  ngOnInit() {}

}
