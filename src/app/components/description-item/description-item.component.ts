import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SearchService} from 'src/app/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-description-item',
  templateUrl: './description-item.component.html',
  styleUrls: ['./description-item.component.scss'],
})
export class DescriptionItemComponent implements OnInit {
  public map:string="/assets/img/icon-map.svg";
  id:string;
  description:string;
  city_name:string;
  city_code:string;
  sellerName:string;
  logo:string;
  constructor(private item:SearchService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.item.getItemDetails(this.id).subscribe((resp:any)=>{
      this.description = resp.description;
      this.city_name = resp.city.name;
      this.city_code = resp.city.code;
      this.sellerName = resp.seller.name;
      this.logo = resp.seller.logo;
    })
  }

}
