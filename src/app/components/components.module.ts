import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component'

import { IonicModule } from '@ionic/angular'
import {SearchBarComponent} from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({imports:[FormsModule,  
                    CommonModule,
                    IonicModule], 
           declarations: [SearchBarComponent, 
                          NavbarComponent], 
           exports: [SearchBarComponent, 
                     NavbarComponent]
         })
            

export class ComponentsModule {}

