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
    });
  }

  
}


