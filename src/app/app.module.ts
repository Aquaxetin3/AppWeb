import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LandingPage } from '../pages/landing/landing';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 var config = {
    apiKey: "AIzaSyBan7VaLzMJ6aoN3kMjN_58Jr5KCdPt54k",
    authDomain: "photoapp-1ca9a.firebaseapp.com",
    databaseURL: "https://photoapp-1ca9a.firebaseio.com",
    projectId: "photoapp-1ca9a",
    storageBucket: "photoapp-1ca9a.appspot.com",
    messagingSenderId: "880869713676"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
