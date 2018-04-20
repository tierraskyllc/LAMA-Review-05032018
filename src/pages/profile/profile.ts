import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ShareProvider } from '../../providers/share/share';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeModule } from 'angular2-qrcode';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  createdCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,  private shareProvider: ShareProvider, private barcodeScanner: BarcodeScanner, private ngxQRCodeModule: NgxQRCodeModule) {
  	this.createdCode = '{username":"'+ this.shareProvider.username +'", "firstname":"'+ this.shareProvider.firstname +'" , "lastname":"'+ this.shareProvider.lastname +'"}';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
