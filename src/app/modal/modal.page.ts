import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { SearchService } from '../services/search.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  name: String;
  price: Number
  constructor(private modalCtrl: ModalController, private searchService: SearchService) { }

  ngOnInit() {
    
    this.name = this.searchService.getItemCar();
  }

  dismiss(){
    this.modalCtrl.dismiss({ 'dismissed': true });
  }

  

}
