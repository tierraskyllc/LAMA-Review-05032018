import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AddneweventComponent } from '../../components/addnewevent/addnewevent';

/**
 * Generated class for the EventsmgmgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventsmgmg',
  templateUrl: 'eventsmgmg.html',
})
export class EventsmgmgPage {

  addEventsData:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsmgmgPage');
  }

  presentPopover() {
    //let popover = this.popoverCtrl.create(AddneweventComponent, {}, { cssClass: 'custom-popover'});
    let popover = this.popoverCtrl.create(AddneweventComponent);
    popover.present();
  }

}
