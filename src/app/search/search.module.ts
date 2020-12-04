import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { HttpClient } from '@angular/common/http';
import { ListedItemComponent } from '../components/listed-item/listed-item.component';

import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchPage, ListedItemComponent],
  providers: [HttpClient]
})
export class SearchPageModule {}
