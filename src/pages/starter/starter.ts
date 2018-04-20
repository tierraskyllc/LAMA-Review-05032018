import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the StarterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html',
})
export class StarterPage {

  data:any = {};
  signInForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private http: Http,  private shareProvider: ShareProvider) {
    this.data.response = '';
    this.data.error = '';

    this.signInForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('.+@.+')])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarterPage');
  }

  login() {
      this.submitAttempt = true;
      if(this.signInForm.valid) {
        var body = new FormData();
        var json_encoded_response = '';
        var decoded_response = JSON.parse('{"sessionid":"", "username":"", "firstname":"" , "lastname":""}');
        body.append('username', this.signInForm.controls.username.value);
        body.append('password', this.signInForm.controls.password.value);
        this.http.post(this.shareProvider.server + 'signin/signin.php', body)
        .subscribe(
          data => {
            //this.data.response = data["_body"];
            json_encoded_response = data["_body"];
            decoded_response = JSON.parse(json_encoded_response);
            if(decoded_response[0] == true) {
              this.shareProvider.sessionid = decoded_response[2];
              this.shareProvider.username = decoded_response[3];
              this.shareProvider.firstname = decoded_response[4];
              this.shareProvider.lastname = decoded_response[5];
              if(decoded_response[6] != null) {
                this.shareProvider.role = decoded_response[6];
              }
              this.shareProvider.curentpage = 'ProfilePage';
            }
            else if(decoded_response[0] == false) {
              this.data.error = decoded_response[2];
            }
            else {
              this.data.error = decoded_response[1];
            }
          },
          error => {
            this.data.error = error;
            console.log("Oooops!");
          }
        );
      }
  }

  signup() {
    this.shareProvider.curentpage = 'RegisterPage';
  }

}
