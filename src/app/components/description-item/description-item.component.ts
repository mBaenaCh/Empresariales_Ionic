import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NetCoreService} from 'src/app/services/net-core.service'
@Component({
  selector: 'app-description-item',
  templateUrl: './description-item.component.html',
  styleUrls: ['./description-item.component.scss'],
})
export class DescriptionItemComponent implements OnInit {
  public map:string="/assets/img/icon-map.svg";
  id:string="MCO574572313"
  description:string;
  city_name:string;
  city_code:string;
  sellerName:string;
  logo:string;
  constructor(private netCore:NetCoreService) { }

  
  ngOnInit() {
    this.netCore.getItemId(this.id).subscribe((resp:any)=>{
      this.description = resp.description;
      this.city_name = resp.city.name;
      this.city_code = resp.city.code;
      this.sellerName = resp.seller.name;
      this.logo = resp.seller.logo;
    })
  }

}
