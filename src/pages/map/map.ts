import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, MenuController, ItemSliding } from 'ionic-angular';
import { AngularFire, FirebaseListObservable  } from 'angularfire2';
import { UserData } from '../../providers/user-data';
import { DataDetailPage } from '../data-detail/data-detail';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  selectedItem: any;
  data: {name?: string, text?: string} = {};
  items: FirebaseListObservable<any[]>;
  theItems: FirebaseListObservable<any[]>;
  uid: string;
  submitted = false;
  admin: boolean = false;
  clientsMessage:string;

  constructor(public storage: Storage, public navCtrl: NavController,
    public navParams: NavParams, public af: AngularFire, menuCtrl: MenuController,
    public userData: UserData) {

    this.items = af.database.list('/orders');
    this.selectedItem = navParams.get('item');
    //this.getUid();
  }

  ngAfterViewInit() {
    this.getUid();
  }

  getUid() {
    this.userData.getUid().then((uid) => {
      this.uid = uid;
      this.theItems = this.af.database.list('/orders');
      if (uid === 's4VuKpSIgLbZYvoysq7fK2ghHTN2') {
       this.admin = true;
      }else{
       this.clientsMessage = "Esta seccion solo es visible para los administradores de la App. Gracias por su compresion :)";

      }
    });
  }

   returnTime(previousTime:number){
      let timeNeeded:number = Date.now() - previousTime;
      let inMinutes:number = (timeNeeded/1000) / 60;
      if (inMinutes < 20) {
        return "Hace " + Math.floor(inMinutes) + " minutos";
      } else if (inMinutes < 40) {
        return "hace 30 minutos";
      } else if (inMinutes < 80) {
        return "Hace una hora";
      } else if (inMinutes > 1380 && inMinutes < 2760) {
        return "Hace un dia";
      } else if (inMinutes < 1380) {
        let hours:number = Math.floor(inMinutes/60);
        return "Hace " + hours + " horas aproximadamente";
      } else {
        var date = new Date(previousTime);
        return date.toDateString();
      }

    }


    update(slidingItem: ItemSliding, item: any) {
      this.theItems.remove(item.$key).then(() => {
        console.log('Deleted Item with name: ' + item.name + ', key: ' + item.$key);
        slidingItem.close();
      });
  }


  
}


