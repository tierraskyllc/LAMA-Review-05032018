import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShareProvider } from '../../providers/share/share';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isApp: boolean = false;

  constructor(public navCtrl: NavController, private shareProvider: ShareProvider) {
  	this.isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
  }

  open(pageName) {
    this.shareProvider.curentpage = pageName;
  }

}
