import { NgModule } from '@angular/core';
import {SearchBarComponent} from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({imports:[FormsModule], declarations: [SearchBarComponent], exports: [SearchBarComponent]})

export class ComponentsModule {}