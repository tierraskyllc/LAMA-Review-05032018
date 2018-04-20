import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the SignupsuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupsuccess',
  templateUrl: 'signupsuccess.html',
})
export class SignupsuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareProvider: ShareProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupsuccessPage');
  }

  login() {
      this.shareProvider.curentpage = 'StarterPage';
  }

}
