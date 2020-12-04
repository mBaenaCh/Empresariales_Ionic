import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { HttpClient } from '@angular/common/http';


//IMPORT HOME COMPONENTS
import {CarruselHomeComponent} from '../components/carrusel-home/carrusel-home.component'
import {CategoryHomeComponent} from '../components/category-home/category-home.component'
import {ItemsHomeComponent} from '../components/items-home/items-home.component'
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule
  ],

  declarations: [HomePage, CarruselHomeComponent,
    CategoryHomeComponent,
    ItemsHomeComponent],
  providers: [HttpClient]

})
export class HomePageModule {}
