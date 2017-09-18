import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { DataPopoverPage } from '../data-popover/data-popover';
import { AngularFire, FirebaseListObservable  } from 'angularfire2';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-data-detail',
  templateUrl: 'data-detail.html'
})
export class DataDetailPage {
  data: any;
  theItems: FirebaseListObservable<any[]>;
  uid: string;


  constructor(public navParams: NavParams, public popoverCtrl: PopoverController,
   public af: AngularFire, public userData: UserData) {
    this.data = navParams.data;
  }

  more(event: Event) {
    let popover = this.popoverCtrl.create(DataPopoverPage, {data: this.data});
    popover.present({ ev: event });
  }

   ngAfterViewInit() {
    this.getUid();
  }

  getUid() {
    this.userData.getUsername().then((username) => {
      this.uid = username;
      this.theItems = this.af.database.list('/orders');
    });
  }

   saveData() {
  this.userData.getUsername().then((username) => {
      this.uid = username;
      this.theItems = this.af.database.list('/orders' );
      this.theItems.push({ name: this.data.name, price: this.data.price, client: this.uid, mesa: 1, status: 'pendiente', fecha: Date.now()})
      .then((val) => {
        alert("Item agregado a la orden. Tu orden estara lista en 30 minutps");
      })
      .catch((err) => {
        console.log(err);
        alert("No se pudo agregar a la orden");
      });
    
    });
  

  }
}
