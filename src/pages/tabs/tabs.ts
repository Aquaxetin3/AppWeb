import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { EnterDataPage } from '../enter-data/enter-data';
import { ShowDataPage } from '../show-data/show-data';
import { MapPage } from '../map/map';
import { MenuPage } from '../menu/menu';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
<<<<<<< HEAD
  tab1Root: any = EnterDataPage;
  tab2Root: any = MenuPage;
=======
  tab1Root: any = MenuPage;
  tab2Root: any = EnterDataPage;
>>>>>>> fcd8ea915013b640b07e2113eca8002d5ceaa683
  tab3Root: any = MapPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
