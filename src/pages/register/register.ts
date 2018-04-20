import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data:any = {};
  signUpForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private http: Http,  private shareProvider: ShareProvider) {
  	
    this.data.response = '';
    this.data.error = '';

    this.data.usaSelected = false;
  	this.data.intlSelected = false;
    this.data.usaregions = [];
    this.data.usastates = [];
    this.data.usachapters = [];
    this.data.countries = [];
    this.data.intlchapters = [];
 	  this.signUpForm = formBuilder.group({
 		 firstname: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z]+[a-zA-Z1-9\,\-\.\' ]*')])],
 		 lastname: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z]+[a-zA-Z1-9\,\-\.\' ]*')])],
 		 username: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('.+@.+')])],
 		 password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}')])],
 		 confirmpasswd: [''],
 		 selection: ['', Validators.compose([Validators.required])],
 		 region: ['', Validators.compose([Validators.required])],
 		 state: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
 		 chapter: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
     country: ['', Validators.compose([Validators.required])],
     intlchapter: ['', Validators.compose([Validators.required])]
 	  });
  }

  ionViewDidLoad() {
    this.populateUSARegions();
    this.populateCountries();
    console.log('ionViewDidLoad RegisterPage');
  }

  selectUSA() {
    this.data.usaSelected = true;
    this.data.intlSelected = false;
    this.signUpForm.get('country').setValidators([]);
    this.signUpForm.get('country').updateValueAndValidity();
    this.signUpForm.get('intlchapter').setValidators([]);
    this.signUpForm.get('intlchapter').updateValueAndValidity();
    this.signUpForm.get('region').setValidators([Validators.required]);
    this.signUpForm.get('region').updateValueAndValidity();
    this.signUpForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('state').updateValueAndValidity();
    this.signUpForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('chapter').updateValueAndValidity();
  }

  selectInternational() {
    this.data.intlSelected = true;
    this.data.usaSelected = false;
    this.signUpForm.get('country').setValidators([Validators.required]);
    this.signUpForm.get('country').updateValueAndValidity();
    this.signUpForm.get('intlchapter').setValidators([Validators.required]);
    this.signUpForm.get('intlchapter').updateValueAndValidity();
    this.signUpForm.get('region').setValidators([]);
    this.signUpForm.get('region').updateValueAndValidity();
    this.signUpForm.get('state').setValidators([]);
    this.signUpForm.get('state').updateValueAndValidity();
    this.signUpForm.get('chapter').setValidators([]);
    this.signUpForm.get('chapter').updateValueAndValidity();
  }

  submit() {
    this.submitAttempt = true;
    if(this.signUpForm.valid) {
      var body = new FormData();
      var json_encoded_response = '';
      var decoded_response = '';
      body.append('username', this.signUpForm.controls.username.value);
      body.append('firstname', this.signUpForm.controls.firstname.value);
      body.append('lastname', this.signUpForm.controls.lastname.value);
      body.append('password', this.signUpForm.controls.password.value);
      body.append('selection', this.signUpForm.controls.selection.value);
      body.append('chapter', this.signUpForm.controls.chapter.value);
      body.append('intlchapter', this.signUpForm.controls.intlchapter.value);
      this.http.post(this.shareProvider.server + 'signup/signup.php', body)
      .subscribe(
        data => {
          json_encoded_response = data["_body"];
          decoded_response = JSON.parse(json_encoded_response);
          if(decoded_response[0] === "error") {
            this.data.error = decoded_response[1];
          }
          else {
            if(decoded_response[0]) {
              this.shareProvider.curentpage = 'SignupsuccessPage';
            }
            else if(!decoded_response[0]) {
              this.data.error = decoded_response[2];
            }
            else {
              this.data.error = "Problem signing up for LAMA.  Please check your internet connection.  Contact administrator if problem persists.";
            }
          }
          /*=====
          if(decoded_response[0] == true) {
            this.shareProvider.curentpage = 'SignupsuccessPage';
          }
          else if(decoded_response[0] == false) {
            this.data.error = decoded_response[2];
          }
          else if(decoded_response[0] == "error") {
            this.data.error = decoded_response[1];
          }
          else {
            this.data.error = "Problem signing up for LAMA.  Please check your internet connection.  Contact administrator if problem persists.";
            //console.log("Oooops!");
          }
          =====*/
        },
        error => {
          this.data.error = "Problem signing up for LAMA.  Please check your internet connection.  Contact administrator if problem persists.";
          //console.log("Oooops!");
        }
      );
    }
  }

  populateUSARegions() {
    this.signUpForm.patchValue({state: '', chapter: ''});
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

    this.signUpForm.get('country').setValidators([]);
    this.signUpForm.get('country').updateValueAndValidity();
    this.signUpForm.get('intlchapter').setValidators([]);
    this.signUpForm.get('intlchapter').updateValueAndValidity();
    this.signUpForm.get('region').setValidators([Validators.required]);
    this.signUpForm.get('region').updateValueAndValidity();
    this.signUpForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('state').updateValueAndValidity();
    this.signUpForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('chapter').updateValueAndValidity();
  }

  populateUSAStatesByRegion() {
    this.signUpForm.patchValue({state: '', chapter: ''});
    this.data.usachapters = [];
    var decoded_response = '';
    var body = new FormData();
    var regionid = this.signUpForm.controls.region.value;
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

    this.signUpForm.get('country').setValidators([]);
    this.signUpForm.get('country').updateValueAndValidity();
    this.signUpForm.get('intlchapter').setValidators([]);
    this.signUpForm.get('intlchapter').updateValueAndValidity();
    this.signUpForm.get('region').setValidators([Validators.required]);
    this.signUpForm.get('region').updateValueAndValidity();
    this.signUpForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('state').updateValueAndValidity();
    this.signUpForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('chapter').updateValueAndValidity();
  }

  populateUSAChaptersByState() {
    this.signUpForm.patchValue({chapter: ''});
    var decoded_response = '';
    var body = new FormData();
    var stateid = this.signUpForm.controls.state.value;
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

    this.signUpForm.get('country').setValidators([]);
    this.signUpForm.get('country').updateValueAndValidity();
    this.signUpForm.get('intlchapter').setValidators([]);
    this.signUpForm.get('intlchapter').updateValueAndValidity();
    this.signUpForm.get('region').setValidators([Validators.required]);
    this.signUpForm.get('region').updateValueAndValidity();
    this.signUpForm.get('state').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('state').updateValueAndValidity();
    this.signUpForm.get('chapter').setValidators([Validators.required, Validators.minLength(1)]);
    this.signUpForm.get('chapter').updateValueAndValidity();
  }

  populateCountries() {
    this.signUpForm.patchValue({country: '', intlchapter: ''});
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

    this.signUpForm.get('country').setValidators([Validators.required]);
    this.signUpForm.get('country').updateValueAndValidity();
    this.signUpForm.get('intlchapter').setValidators([Validators.required]);
    this.signUpForm.get('intlchapter').updateValueAndValidity();
    this.signUpForm.get('region').setValidators([]);
    this.signUpForm.get('region').updateValueAndValidity();
    this.signUpForm.get('state').setValidators([]);
    this.signUpForm.get('state').updateValueAndValidity();
    this.signUpForm.get('chapter').setValidators([]);
    this.signUpForm.get('chapter').updateValueAndValidity();
  }

  populateIntlChaptersByReg() {
    this.signUpForm.patchValue({intlchapter: ''});
    var decoded_response = '';
    var body = new FormData();
    var countryid = this.signUpForm.controls.country.value;
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

    this.signUpForm.get('country').setValidators([Validators.required]);
    this.signUpForm.get('country').updateValueAndValidity();
    this.signUpForm.get('intlchapter').setValidators([Validators.required]);
    this.signUpForm.get('intlchapter').updateValueAndValidity();
    this.signUpForm.get('region').setValidators([]);
    this.signUpForm.get('region').updateValueAndValidity();
    this.signUpForm.get('state').setValidators([]);
    this.signUpForm.get('state').updateValueAndValidity();
    this.signUpForm.get('chapter').setValidators([]);
    this.signUpForm.get('chapter').updateValueAndValidity();
  }
}
