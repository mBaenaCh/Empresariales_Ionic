import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-item',
  templateUrl: './description-item.component.html',
  styleUrls: ['./description-item.component.scss'],
})
export class DescriptionItemComponent implements OnInit {
  logo:string="https://s2.logaster.com/static/v3/img/products/logo.png"
  map:string="/assets/img/icon-map.svg"
  constructor() { }

  ngOnInit() {}

}
