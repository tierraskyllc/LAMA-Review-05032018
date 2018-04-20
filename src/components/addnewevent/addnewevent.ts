import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the AddneweventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'addnewevent',
  templateUrl: 'addnewevent.html'
})
export class AddneweventComponent {

  data:any = {};
  addEventForm: FormGroup;
  file: File;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private http: Http,  private shareProvider: ShareProvider, public viewCtrl: ViewController) {
  	
  	this.data.response = '';
  	this.data.error = '';

  	this.addEventForm = formBuilder.group({
  		date: ['', Validators.compose([Validators.required])],
  		time: ['', Validators.compose([Validators.required])],
  		title: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
  		desc: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(200)])],
  		// Venue (street, apt/unit, city, state, zipcode, country) //
  		vstreet: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(200)])],
  		vapt: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
  		vcity: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100)])],
  		vstate: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100)])],
  		vzipcode: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
  		vcountry: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100)])],
  		// ============================ //
  		// Focus on this audiance/group //
  		selection: ['', Validators.compose([Validators.required])],
  		region: ['', Validators.compose([Validators.required])],
 		  state: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
 		  city: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
 		  chapter: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
     	country: ['', Validators.compose([Validators.required])],
     	intlchapter: ['', Validators.compose([Validators.required])],
     	// ==== End ==== //
     	imagefile: ['', Validators.compose([Validators.required])]
  	});
  }

  selectUSA() {
    this.data.usaSelected = true;
    this.data.intlSelected = false;
    this.addEventForm.get('country').setValidators([]);
    this.addEventForm.get('country').updateValueAndValidity();
    this.addEventForm.get('intlchapter').setValidators([]);
    this.addEventForm.get('intlchapter').updateValueAndValidity();
    this.addEventForm.get('region').setValidators([Validators.required]);
    this.addEventForm.get('region').updateValueAndValidity();
    this.addEventForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('state').updateValueAndValidity();
    this.addEventForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('chapter').updateValueAndValidity();
  }

  selectInternational() {
    this.data.intlSelected = true;
    this.data.usaSelected = false;
    this.addEventForm.get('country').setValidators([Validators.required]);
    this.addEventForm.get('country').updateValueAndValidity();
    this.addEventForm.get('intlchapter').setValidators([Validators.required]);
    this.addEventForm.get('intlchapter').updateValueAndValidity();
    this.addEventForm.get('region').setValidators([]);
    this.addEventForm.get('region').updateValueAndValidity();
    this.addEventForm.get('state').setValidators([]);
    this.addEventForm.get('state').updateValueAndValidity();
    this.addEventForm.get('chapter').setValidators([]);
    this.addEventForm.get('chapter').updateValueAndValidity();
  }

  populateUSARegions() {
    this.addEventForm.patchValue({state: '', chapter: ''});
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
        console.log("Oooops!");
      }
    );

    this.addEventForm.get('country').setValidators([]);
    this.addEventForm.get('country').updateValueAndValidity();
    this.addEventForm.get('intlchapter').setValidators([]);
    this.addEventForm.get('intlchapter').updateValueAndValidity();
    this.addEventForm.get('region').setValidators([Validators.required]);
    this.addEventForm.get('region').updateValueAndValidity();
    this.addEventForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('state').updateValueAndValidity();
    this.addEventForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('chapter').updateValueAndValidity();
  }

  populateUSAStatesByRegion() {
    this.addEventForm.patchValue({state: '', chapter: ''});
    this.data.usachapters = [];
    var decoded_response = '';
    var body = new FormData();
    var regionid = this.addEventForm.controls.region.value;
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
        console.log("Oooops!");
      }
    );

    this.addEventForm.get('country').setValidators([]);
    this.addEventForm.get('country').updateValueAndValidity();
    this.addEventForm.get('intlchapter').setValidators([]);
    this.addEventForm.get('intlchapter').updateValueAndValidity();
    this.addEventForm.get('region').setValidators([Validators.required]);
    this.addEventForm.get('region').updateValueAndValidity();
    this.addEventForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('state').updateValueAndValidity();
    this.addEventForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('chapter').updateValueAndValidity();
  }

  populateUSAChaptersByState() {
    this.addEventForm.patchValue({chapter: ''});
    var decoded_response = '';
    var body = new FormData();
    var stateid = this.addEventForm.controls.state.value;
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
        console.log("Oooops!");
      }
    );

    this.addEventForm.get('country').setValidators([]);
    this.addEventForm.get('country').updateValueAndValidity();
    this.addEventForm.get('intlchapter').setValidators([]);
    this.addEventForm.get('intlchapter').updateValueAndValidity();
    this.addEventForm.get('region').setValidators([Validators.required]);
    this.addEventForm.get('region').updateValueAndValidity();
    this.addEventForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('state').updateValueAndValidity();
    this.addEventForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.addEventForm.get('chapter').updateValueAndValidity();
  }

  populateCountries() {
    this.addEventForm.patchValue({country: '', intlchapter: ''});
    this.data.intlchapters = [];
    var decoded_response = '';
    var body = new FormData();
    this.http.post(this.shareProvider.server + 'countries.php', body)
    .subscribe(
      data => {
        //this.data.response = 'Response: ' + data["_body"];
        decoded_response = JSON.parse(data["_body"]);
        if(decoded_response[0]) {
          this.data.countries = decoded_response[2];
        }
        //this.data.countries = decoded_response;
      },
      error => {
        console.log("Oooops!");
      }
    );

    this.addEventForm.get('country').setValidators([Validators.required]);
    this.addEventForm.get('country').updateValueAndValidity();
    this.addEventForm.get('intlchapter').setValidators([Validators.required]);
    this.addEventForm.get('intlchapter').updateValueAndValidity();
    this.addEventForm.get('region').setValidators([]);
    this.addEventForm.get('region').updateValueAndValidity();
    this.addEventForm.get('state').setValidators([]);
    this.addEventForm.get('state').updateValueAndValidity();
    this.addEventForm.get('chapter').setValidators([]);
    this.addEventForm.get('chapter').updateValueAndValidity();
  }

  populateIntlChaptersByReg() {
    this.addEventForm.patchValue({intlchapter: ''});
    var decoded_response = '';
    var body = new FormData();
    var countryid = this.addEventForm.controls.country.value;
    body.append('countryid', countryid);
    this.http.post(this.shareProvider.server + 'intlchaptersbyreg.php', body)
    .subscribe(
      data => {
        decoded_response = JSON.parse(data["_body"]);
        if(decoded_response[0]) {
          this.data.intlchapters = decoded_response[2];
        }
      },
      error => {
        console.log("Oooops!");
      }
    );

    this.addEventForm.get('country').setValidators([Validators.required]);
    this.addEventForm.get('country').updateValueAndValidity();
    this.addEventForm.get('intlchapter').setValidators([Validators.required]);
    this.addEventForm.get('intlchapter').updateValueAndValidity();
    this.addEventForm.get('region').setValidators([]);
    this.addEventForm.get('region').updateValueAndValidity();
    this.addEventForm.get('state').setValidators([]);
    this.addEventForm.get('state').updateValueAndValidity();
    this.addEventForm.get('chapter').setValidators([]);
    this.addEventForm.get('chapter').updateValueAndValidity();
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
}

  canceladdevent() {
    this.viewCtrl.dismiss();
  }

  addnewevent() {
    var body = new FormData();
    body.append('imagefile', this.file);
    this.http.post(this.shareProvider.server + 'events/addevent.php', body)
    .subscribe(
      data => {
        this.data.error = data;
      },
      error => {
          this.data.error = error;
          //this.data.error = "Problem signing up for LAMA.  Please check your internet connection.  Contact administrator if problem persists.";
          //console.log("Oooops!");
      }
    );
  }

}
