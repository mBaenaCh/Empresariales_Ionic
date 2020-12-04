import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailPageRoutingModule } from './item-detail-routing.module';

import { ItemDetailPage } from './item-detail.page';
//components
import {CarrouselItemComponent} from '../components/carrousel-item/carrousel-item.component'
import {BuyItemComponent} from '../components/buy-item/buy-item.component'
import {DescriptionItemComponent} from '../components/description-item/description-item.component'
import {SearchBarComponent} from '../components/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailPageRoutingModule
  ],
  declarations: [
    ItemDetailPage,
    CarrouselItemComponent,
    BuyItemComponent,
    DescriptionItemComponent,
    SearchBarComponent
  ]
})
export class ItemDetailPageModule {}
