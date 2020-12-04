import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { HttpClient } from '@angular/common/http';
import { ListedItemComponent } from '../components/listed-item/listed-item.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage, ListedItemComponent, SearchBarComponent],
  providers: [HttpClient]
})
export class SearchPageModule {}
