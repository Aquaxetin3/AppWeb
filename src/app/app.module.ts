import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { Ionic_2_Firebase } from './app.component';

import { ShowDataPage } from '../pages/show-data/show-data';
import { EnterDataPage } from '../pages/enter-data/enter-data';
import { DataPopoverPage } from '../pages/data-popover/data-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { DataDetailPage } from '../pages/data-detail/data-detail';
import { MenuPage } from '../pages/menu/menu';


import {  MapData } from '../providers/map-data';
import { UserData } from '../providers/user-data';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const myFirebaseConfig = {
     apiKey: "AIzaSyBan7VaLzMJ6aoN3kMjN_58Jr5KCdPt54k",
    authDomain: "photoapp-1ca9a.firebaseapp.com",
    databaseURL: "https://photoapp-1ca9a.firebaseio.com",
    projectId: "photoapp-1ca9a",
    storageBucket: "photoapp-1ca9a.appspot.com",
    messagingSenderId: "880869713676"
};


export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    Ionic_2_Firebase,
    EnterDataPage,
    ShowDataPage,
    AccountPage,
    LoginPage,
    MapPage,
    DataPopoverPage,
    SignupPage,
    TabsPage,
    DataDetailPage,
    MenuPage
  ],
  imports: [
    IonicModule.forRoot(Ionic_2_Firebase),
		IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Ionic_2_Firebase,
    EnterDataPage,
    ShowDataPage,
    AccountPage,
    LoginPage,
    MapPage,
    DataPopoverPage,
    SignupPage,
    TabsPage,
    DataDetailPage,
    MenuPage
  ],
  providers: [MapData, UserData]
})
export class AppModule { }
