import { Component, OnInit } from '@angular/core';
import { ModalPage } from '../../modal/modal.page'
import { ModalController } from '@ionic/angular'
import { Router } from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    return await modal.present();
  }

  homeLink(){
    this.router.navigate(['/home'] );
  }

}
