import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the EventcheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventcheckin',
  templateUrl: 'eventcheckin.html',
})
export class EventcheckinPage {

  scannedCode = null;
  error = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
    	this.error = err;
        console.log('Error: ', err);
    });
  }

  ionViewDidLoad() {
  	this.scanCode();
    console.log('ionViewDidLoad EventcheckinPage');
  }

}
