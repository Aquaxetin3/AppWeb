import { Component } from '@angular/core';
import { ShowDataPage } from '../show-data/show-data';
import { AlertController, NavController, Events } from 'ionic-angular';



@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(
    public alertCtrl: AlertController,
    public nav: NavController,
    public events: Events) {
    //console.log(this.nav.getActive());
  
  }

  goToItems() {
  
     this.nav.push(ShowDataPage);
   }


}
