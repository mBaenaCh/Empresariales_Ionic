import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

//IMPORT HOME COMPONENTS
import {CarruselHomeComponent} from '../components/carrusel-home/carrusel-home.component'
import {CategoryHomeComponent} from '../components/category-home/category-home.component'
import {ItemsHomeComponent} from '../components/items-home/items-home.component'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    CarruselHomeComponent,
    CategoryHomeComponent,
    ItemsHomeComponent]
})
export class HomePageModule {}
