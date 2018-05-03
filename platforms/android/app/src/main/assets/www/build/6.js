webpackJsonp([6],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(734);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_share_share__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, http, shareProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.shareProvider = shareProvider;
        this.data = {};
        this.submitAttempt = false;
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
            firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z]+[a-zA-Z1-9\,\-\.\' ]*')])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z]+[a-zA-Z1-9\,\-\.\' ]*')])],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('.+@.+')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(16), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}')])],
            confirmpasswd: [''],
            selection: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            region: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)])],
            chapter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)])],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            intlchapter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        this.populateUSARegions();
        this.populateCountries();
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.selectUSA = function () {
        this.data.usaSelected = true;
        this.data.intlSelected = false;
        this.signUpForm.get('country').setValidators([]);
        this.signUpForm.get('country').updateValueAndValidity();
        this.signUpForm.get('intlchapter').setValidators([]);
        this.signUpForm.get('intlchapter').updateValueAndValidity();
        this.signUpForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('region').updateValueAndValidity();
        this.signUpForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('state').updateValueAndValidity();
        this.signUpForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('chapter').updateValueAndValidity();
    };
    RegisterPage.prototype.selectInternational = function () {
        this.data.intlSelected = true;
        this.data.usaSelected = false;
        this.signUpForm.get('country').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('country').updateValueAndValidity();
        this.signUpForm.get('intlchapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('intlchapter').updateValueAndValidity();
        this.signUpForm.get('region').setValidators([]);
        this.signUpForm.get('region').updateValueAndValidity();
        this.signUpForm.get('state').setValidators([]);
        this.signUpForm.get('state').updateValueAndValidity();
        this.signUpForm.get('chapter').setValidators([]);
        this.signUpForm.get('chapter').updateValueAndValidity();
    };
    RegisterPage.prototype.submit = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.signUpForm.valid) {
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
                .subscribe(function (data) {
                json_encoded_response = data["_body"];
                decoded_response = JSON.parse(json_encoded_response);
                if (decoded_response[0] === "error") {
                    _this.data.error = decoded_response[1];
                }
                else {
                    if (decoded_response[0]) {
                        _this.shareProvider.curentpage = 'SignupsuccessPage';
                    }
                    else if (!decoded_response[0]) {
                        _this.data.error = decoded_response[2];
                    }
                    else {
                        _this.data.error = "Problem signing up for LAMA.  Please check your internet connection.  Contact administrator if problem persists.";
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
            }, function (error) {
                _this.data.error = "Problem signing up for LAMA.  Please check your internet connection.  Contact administrator if problem persists.";
                //console.log("Oooops!");
            });
        }
    };
    RegisterPage.prototype.populateUSARegions = function () {
        var _this = this;
        this.signUpForm.patchValue({ state: '', chapter: '' });
        this.data.usastates = [];
        this.data.usachapters = [];
        var decoded_response = '';
        var body = new FormData();
        this.http.post(this.shareProvider.server + 'usaregions.php', body)
            .subscribe(function (data) {
            decoded_response = JSON.parse(data["_body"]);
            if (decoded_response[0]) {
                _this.data.usaregions = decoded_response[2];
            }
        }, function (error) {
            console.log("Oooops!");
        });
        this.signUpForm.get('country').setValidators([]);
        this.signUpForm.get('country').updateValueAndValidity();
        this.signUpForm.get('intlchapter').setValidators([]);
        this.signUpForm.get('intlchapter').updateValueAndValidity();
        this.signUpForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('region').updateValueAndValidity();
        this.signUpForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('state').updateValueAndValidity();
        this.signUpForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('chapter').updateValueAndValidity();
    };
    RegisterPage.prototype.populateUSAStatesByRegion = function () {
        var _this = this;
        this.signUpForm.patchValue({ state: '', chapter: '' });
        this.data.usachapters = [];
        var decoded_response = '';
        var body = new FormData();
        var regionid = this.signUpForm.controls.region.value;
        body.append('regionid', regionid);
        this.http.post(this.shareProvider.server + 'usastatesbyregion.php', body)
            .subscribe(function (data) {
            decoded_response = JSON.parse(data["_body"]);
            if (decoded_response[0]) {
                _this.data.usastates = decoded_response[2];
            }
        }, function (error) {
            console.log("Oooops!");
        });
        this.signUpForm.get('country').setValidators([]);
        this.signUpForm.get('country').updateValueAndValidity();
        this.signUpForm.get('intlchapter').setValidators([]);
        this.signUpForm.get('intlchapter').updateValueAndValidity();
        this.signUpForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('region').updateValueAndValidity();
        this.signUpForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('state').updateValueAndValidity();
        this.signUpForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('chapter').updateValueAndValidity();
    };
    RegisterPage.prototype.populateUSAChaptersByState = function () {
        var _this = this;
        this.signUpForm.patchValue({ chapter: '' });
        var decoded_response = '';
        var body = new FormData();
        var stateid = this.signUpForm.controls.state.value;
        body.append('stateid', stateid);
        this.http.post(this.shareProvider.server + 'usachaptersbystate.php', body)
            .subscribe(function (data) {
            decoded_response = JSON.parse(data["_body"]);
            if (decoded_response[0]) {
                _this.data.usachapters = decoded_response[2];
            }
        }, function (error) {
            console.log("Oooops!");
        });
        this.signUpForm.get('country').setValidators([]);
        this.signUpForm.get('country').updateValueAndValidity();
        this.signUpForm.get('intlchapter').setValidators([]);
        this.signUpForm.get('intlchapter').updateValueAndValidity();
        this.signUpForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('region').updateValueAndValidity();
        this.signUpForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('state').updateValueAndValidity();
        this.signUpForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.signUpForm.get('chapter').updateValueAndValidity();
    };
    RegisterPage.prototype.populateCountries = function () {
        var _this = this;
        this.signUpForm.patchValue({ country: '', intlchapter: '' });
        this.data.intlchapters = [];
        var decoded_response = '';
        var body = new FormData();
        this.http.post(this.shareProvider.server + 'countries.php', body)
            .subscribe(function (data) {
            //this.data.response = 'Response: ' + data["_body"];
            decoded_response = JSON.parse(data["_body"]);
            if (decoded_response[0]) {
                _this.data.countries = decoded_response[2];
            }
            //this.data.countries = decoded_response;
        }, function (error) {
            console.log("Oooops!");
        });
        this.signUpForm.get('country').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('country').updateValueAndValidity();
        this.signUpForm.get('intlchapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('intlchapter').updateValueAndValidity();
        this.signUpForm.get('region').setValidators([]);
        this.signUpForm.get('region').updateValueAndValidity();
        this.signUpForm.get('state').setValidators([]);
        this.signUpForm.get('state').updateValueAndValidity();
        this.signUpForm.get('chapter').setValidators([]);
        this.signUpForm.get('chapter').updateValueAndValidity();
    };
    RegisterPage.prototype.populateIntlChaptersByReg = function () {
        var _this = this;
        this.signUpForm.patchValue({ intlchapter: '' });
        var decoded_response = '';
        var body = new FormData();
        var countryid = this.signUpForm.controls.country.value;
        body.append('countryid', countryid);
        this.http.post(this.shareProvider.server + 'intlchaptersbyreg.php', body)
            .subscribe(function (data) {
            decoded_response = JSON.parse(data["_body"]);
            if (decoded_response[0]) {
                _this.data.intlchapters = decoded_response[2];
            }
        }, function (error) {
            console.log("Oooops!");
        });
        this.signUpForm.get('country').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('country').updateValueAndValidity();
        this.signUpForm.get('intlchapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.signUpForm.get('intlchapter').updateValueAndValidity();
        this.signUpForm.get('region').setValidators([]);
        this.signUpForm.get('region').updateValueAndValidity();
        this.signUpForm.get('state').setValidators([]);
        this.signUpForm.get('state').updateValueAndValidity();
        this.signUpForm.get('chapter').setValidators([]);
        this.signUpForm.get('chapter').updateValueAndValidity();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle>\n\n  		<ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <table width="100%" height="100%">\n\n    <tr width="100%" height="100%">\n\n      <td width="100%" height="100%" align="center">\n\n        <div class="container">\n\n          <ion-card-content>\n\n	         <form [formGroup]="signUpForm">\n\n\n\n                <ion-label class="invalidmsg">{{data.error}}</ion-label>\n\n            		<ion-item [class.invalid]="!signUpForm.controls.firstname.valid && (signUpForm.controls.firstname.dirty || submitAttempt)">\n\n                      <ion-label fixed>First Name</ion-label>\n\n                      <ion-input formControlName="firstname" type="text"></ion-input>\n\n                  </ion-item>\n\n\n\n                  <!--p class="invalidmsg" *ngIf="!signUpForm.controls.firstname.valid  && (signUpForm.controls.firstname.dirty || submitAttempt)">Please enter a valid First Name.</p-->\n\n                  <ion-item [class.invalid]="!signUpForm.controls.lastname.valid && (signUpForm.controls.lastname.dirty || submitAttempt)">\n\n                      <ion-label fixed>Last Name</ion-label>\n\n                      <ion-input formControlName="lastname" type="text"></ion-input>\n\n                  </ion-item>\n\n\n\n                  <!--p class="invalidmsg" *ngIf="!signUpForm.controls.lastname.valid  && (signUpForm.controls.lastname.dirty || submitAttempt)">Please enter a valid Last Name.</p-->\n\n                  <ion-item [class.invalid]="!signUpForm.controls.username.valid && (signUpForm.controls.username.dirty || submitAttempt)">\n\n                      <ion-label fixed>Email</ion-label>\n\n                      <ion-input formControlName="username" type="text"></ion-input>\n\n                  </ion-item>\n\n\n\n                  <!--p class="invalidmsg" *ngIf="!signUpForm.controls.username.valid  && (signUpForm.controls.username.dirty || submitAttempt)">Please enter a valid Email Address.</p-->\n\n                  <ion-item [class.invalid]="!signUpForm.controls.password.valid && (signUpForm.controls.password.dirty || submitAttempt)">\n\n                      <ion-label fixed>Password</ion-label>\n\n                      <ion-input formControlName="password" type="password"></ion-input>\n\n                  </ion-item>\n\n\n\n                  <!--p class="invalidmsg" *ngIf="!signUpForm.controls.password.valid  && (signUpForm.controls.password.dirty || submitAttempt)">Please enter a valid Password.</p-->\n\n                  <ion-item [class.invalid]="((signUpForm.controls.confirmpasswd.dirty) && !(signUpForm.controls.password.value === signUpForm.controls.confirmpasswd.value))">\n\n                      <ion-label>Confirm Password</ion-label>\n\n                      <ion-input formControlName="confirmpasswd" type="password"></ion-input>\n\n                  </ion-item>\n\n                  \n\n                  <!--p class="invalidmsg" *ngIf="((!(signUpForm.controls.password.value === signUpForm.controls.confirmpasswd.value)) && (signUpForm.controls.confirmpasswd.dirty || submitAttempt))">Both the passwords you provided must be same.</p-->\n\n                  <ion-list radio-group formControlName="selection" padding-top no-lines>\n\n              		<table>\n\n                			<tr>\n\n                  			<td>\n\n                    				<ion-item padding-right>\n\n                      				<ion-label padding-left>USA</ion-label>\n\n                      				<ion-radio padding-right value="usa" (click)="selectUSA()"></ion-radio>\n\n                    				</ion-item>\n\n                  			</td>\n\n                  			<td>\n\n                    				<ion-item>\n\n                      				<ion-label>International</ion-label>\n\n                      				<ion-radio value="international" (click)="selectInternational()"></ion-radio>\n\n                    				</ion-item>\n\n                  			</td>\n\n                			</tr>\n\n              		</table>\n\n                  <p class="invalidmsg" class="invalidmsg" *ngIf="(submitAttempt && !signUpForm.controls.selection.valid)">Are you signing up for a USA chapter or an International chapter?</p>\n\n            		</ion-list>\n\n            		<div id="usainfo" *ngIf="data.usaSelected">\n\n              		<ion-list>\n\n                			<ion-item [class.invalid]="!signUpForm.controls.region.valid && (signUpForm.controls.region.dirty || submitAttempt)">\n\n                  			<ion-label>Region</ion-label>\n\n                  			<ion-select formControlName="region" interface=popover>\n\n                    				<ion-option (ionSelect)="populateUSAStatesByRegion()" *ngFor="let curregion of data.usaregions" [value]="curregion.id">{{curregion.name}}</ion-option>\n\n                  			</ion-select>\n\n                			</ion-item>\n\n                      <!--p class="invalidmsg" *ngIf="!signUpForm.controls.region.valid && (signUpForm.controls.region.dirty || submitAttempt)">Please select Region.</p-->\n\n                			<ion-item [class.invalid]="!signUpForm.controls.state.valid && (signUpForm.controls.state.dirty || submitAttempt)">\n\n                  			<ion-label>State</ion-label>\n\n                  			<ion-select formControlName="state" interface=popover>\n\n                    				<ion-option (ionSelect)="populateUSAChaptersByState()" *ngFor="let curstate of data.usastates" [value]="curstate.id">{{curstate.name}}</ion-option>\n\n                  			</ion-select>\n\n                			</ion-item>\n\n                      <!--p class="invalidmsg" *ngIf="!signUpForm.controls.state.valid && (signUpForm.controls.state.dirty || submitAttempt)">Please select State.</p-->\n\n                			<ion-item [class.invalid]="!signUpForm.controls.chapter.valid && (signUpForm.controls.chapter.dirty || submitAttempt)">\n\n                  			<ion-label>Chapter</ion-label>\n\n                  			<ion-select formControlName="chapter" interface=popover>\n\n                    				<ion-option *ngFor="let curchap of data.usachapters" [value]="curchap.id">{{curchap.name}}</ion-option>\n\n                  			</ion-select>\n\n                			</ion-item>\n\n                      <!--p class="invalidmsg" *ngIf="!signUpForm.controls.chapter.valid && (signUpForm.controls.chapter.dirty || submitAttempt)">Please select Chapter.</p-->\n\n              		</ion-list>\n\n            		</div>\n\n            		<div id="intlinfo" *ngIf="data.intlSelected">\n\n              		<ion-list>\n\n                    <ion-item [class.invalid]="!signUpForm.controls.country.valid && (signUpForm.controls.country.dirty || submitAttempt)">\n\n                      <ion-label>Country</ion-label>\n\n                      <ion-select formControlName="country" interface=popover>\n\n                        <ion-option (ionSelect)="populateIntlChaptersByReg()" *ngFor="let curcountry of data.countries" [value]="curcountry.id">{{curcountry.name}}</ion-option>\n\n                      </ion-select>\n\n                    </ion-item>\n\n                    <!--p class="invalidmsg" *ngIf="!signUpForm.controls.country.valid && (signUpForm.controls.country.dirty || submitAttempt)">Please select Country.</p-->\n\n                    <ion-item [class.invalid]="!signUpForm.controls.intlchapter.valid && (signUpForm.controls.intlchapter.dirty || submitAttempt)">\n\n                      <ion-label>Chapter</ion-label>\n\n                      <ion-select formControlName="intlchapter" interface=popover>\n\n                        <ion-option *ngFor="let curintlchap of data.intlchapters" [value]="curintlchap.id">{{curintlchap.name}}</ion-option>\n\n                      </ion-select>\n\n                    </ion-item>\n\n                    <!--p class="invalidmsg" *ngIf="!signUpForm.controls.intlchapter.valid && (signUpForm.controls.intlchapter.dirty || submitAttempt)">Please select Chapter.</p-->\n\n                  </ion-list>\n\n            		</div>\n\n                <table width="100%">\n\n                  <tr width="100%">\n\n                    <td width="100%" align="center">\n\n                      <button ion-button small round (click)="submit()">Sign UP</button>\n\n                    </td>\n\n                  </tr>\n\n                </table>\n\n          	</form>\n\n          	<!--First Name: {{signUpForm.controls[\'firstname\'].value}}<br>\n\n          	Last Name: {{signUpForm.controls[\'lastname\'].value}}<br>\n\n          	Email Address: {{signUpForm.controls[\'username\'].value}}<br>\n\n          	Password: {{signUpForm.controls[\'password\'].value}}<br>\n\n          	Confirm Password: {{signUpForm.controls[\'confirmpasswd\'].value}}<br>\n\n          	Selection: {{signUpForm.controls[\'selection\'].value}}<br>\n\n          	Region: {{signUpForm.controls[\'region\'].value}}<br>\n\n          	State: {{signUpForm.controls[\'state\'].value}}<br>\n\n          	Chapter: {{signUpForm.controls[\'chapter\'].value}}<br>\n\n            {{data.response}}\n\n            Is form valid?: {{signUpForm.valid}}-->\n\n          </ion-card-content>\n\n        </div>\n\n      </td>\n\n    </tr>\n\n  </table>\n\n</ion-content>'/*ion-inline-end:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_share_share__["a" /* ShareProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=6.js.map