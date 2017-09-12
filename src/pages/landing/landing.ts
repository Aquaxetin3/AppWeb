import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
	 facebookLoggedIn = false; 
  provider =  {
    loggedin: false,
    name: '',
    profilePicture : '',
    email: false
  }

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private fire: AngularFireAuth,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

    LoginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res=>{
      console.log('From --Facebook--');
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      console.log(res);
    })
  }

  TwitterSignIn(){
    this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then( res=> {
      console.log('From --Twitter--');
      console.log(res);
      /*this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.emai = res.user.email;
      this.provider.profilePicture = res.user.photoURL;*/
    })
    
  }
   
  Logout(){
    this.fire.auth.signOut();
  }

}
