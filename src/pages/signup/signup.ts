import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,  private shareProvider: ShareProvider) {
  	this.data.username = '';
 	  this.data.firstname = '';
 	  this.data.lastname = '';
 	  this.data.password = '';
 	  this.data.confirmpswd = '';
 	  this.data.selection = '';
 	  this.data.region = 0;
    this.data.state = 0;
    this.data.chapter = 0;
    
 	  this.data.usaSelected = false;
  	this.data.intlSelected = false;
    this.data.usaregions = [];
    this.data.usastates = [];
    this.data.usachapters = [];

  	this.data.response = '';
 	  this.data.error = '';
 	  this.http = http;
  }

  ionViewDidLoad() {
    this.populateUSARegions();
    console.log('ionViewDidLoad SignupPage');
  }

  public selectUSA() {
    this.data.usaSelected = true;
    this.data.intlSelected = false;
  }

  public selectInternational() {
    this.data.intlSelected = true;
    this.data.usaSelected = false;
  }

  submit() {
    var body = new FormData();
    var json_encoded_response = '';
    var decoded_response = {
      username: '',
      firstname: '',
      lastname: '',
      sessionid: ''
    };
    body.append('sessionid', this.shareProvider.sessionid);
    body.append('username', this.data.username);
    body.append('firstname', this.data.firstname);
    body.append('lastname', this.data.lastname);
    body.append('password', this.data.password);
    body.append('confirmpswd', this.data.confirmpswd);
    body.append('selection', this.data.selection);
    body.append('region', this.data.region);
    body.append('state', this.data.state);
    this.http.post(this.shareProvider.server + 'signup/signup.php', body)
    .subscribe(
      data => {
        json_encoded_response = data["_body"];
        this.data.response = json_encoded_response;
        decoded_response = JSON.parse(json_encoded_response);
        this.shareProvider.sessionid = decoded_response.sessionid;
        this.data.username = decoded_response.username;
        this.data.firstname = decoded_response.firstname;
        this.data.lastname = decoded_response.lastname;
        this.data.response = this.shareProvider.sessionid;
      },
      error => {
      	this.data.error = error;
        console.log("Oooops!");
      }
    );
  }

  populateUSARegions() {
    this.data.usastates = [];
    this.data.usachapters = [];
    var decoded_response = '';
    var body = new FormData();
    this.http.post(this.shareProvider.server + 'usaregions.php', body)
    .subscribe(
      data => {
        decoded_response = JSON.parse(data["_body"]);
        if(decoded_response[0]) {
          this.data.usaregions = decoded_response[2];
        }
      },
      error => {
        this.data.error = error;
        console.log("Oooops!");
      }
    );
  }

  populateUSAStatesByRegion() {
    this.data.usachapters = [];
    var decoded_response = '';
    var body = new FormData();
    var regionid = this.data.region;
    body.append('regionid', regionid);
    this.http.post(this.shareProvider.server + 'usastatesbyregion.php', body)
    .subscribe(
      data => {
        decoded_response = JSON.parse(data["_body"]);
        if(decoded_response[0]) {
          this.data.usastates = decoded_response[2];
        }
      },
      error => {
        this.data.error = error;
        console.log("Oooops!");
      }
    );
  }

  populateUSAChaptersByState() {
    var decoded_response = '';
    var body = new FormData();
    var stateid = this.data.state;
    body.append('stateid', stateid);
    this.http.post(this.shareProvider.server + 'usachaptersbystate.php', body)
    .subscribe(
      data => {
        decoded_response = JSON.parse(data["_body"]);
        if(decoded_response[0]) {
          this.data.usachapters = decoded_response[2];
        }
      },
      error => {
        this.data.error = error;
        console.log("Oooops!");
      }
    );
  }
}
