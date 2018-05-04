webpackJsonp([14],{

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		706,
		13
	],
	"../pages/application/application.module": [
		707,
		0
	],
	"../pages/dashboard/dashboard.module": [
		709,
		12
	],
	"../pages/eventcheckin/eventcheckin.module": [
		708,
		11
	],
	"../pages/events/events.module": [
		710,
		10
	],
	"../pages/eventsmgmg/eventsmgmg.module": [
		711,
		9
	],
	"../pages/login/login.module": [
		713,
		8
	],
	"../pages/profile/profile.module": [
		712,
		7
	],
	"../pages/register/register.module": [
		714,
		6
	],
	"../pages/signup/signup.module": [
		715,
		5
	],
	"../pages/signupconfirmation/signupconfirmation.module": [
		716,
		4
	],
	"../pages/signupsuccess/signupsuccess.module": [
		717,
		3
	],
	"../pages/starter/starter.module": [
		718,
		2
	],
	"../pages/test/test.module": [
		719,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_share_share__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, shareProvider) {
        this.navCtrl = navCtrl;
        this.shareProvider = shareProvider;
        this.isApp = false;
        this.isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
    }
    HomePage.prototype.open = function (pageName) {
        this.shareProvider.curentpage = pageName;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\home\home.html"*/'<ion-split-pane>\n\n  <!-- side menu  -->\n\n  <ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n      <ion-list>\n\n        <button ion-item (click)="open(\'AboutPage\')" menuClose>About LAMA</button>\n\n        <button ion-item (click)="open(\'StarterPage\')" menuClose>Login</button>\n\n        <button ion-item (click)="open(\'RegisterPage\')" menuClose>Sign Up</button>\n\n        <button ion-item (click)="open(\'ApplicationPage\')" menuClose>Application</button>\n\n        <button ion-item (click)="open(\'TestPage\')" menuClose>test</button>\n\n        <button ion-item (click)="open(\'EventsPage\')" menuClose>Events</button>\n\n        <button *ngIf="shareProvider.role == \'admin\'" ion-item (click)="open(\'EventcheckinPage\')" menuClose>Event Check-In</button>\n\n        <button *ngIf="(shareProvider.role == \'admin\') && (!isApp)" ion-item (click)="open(\'EventsmgmgPage\')" menuClose>Events Management</button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n \n\n  <!-- content -->\n\n  <ion-nav [root]="shareProvider.curentpage" main #content></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_share_share__["a" /* ShareProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddneweventComponent; });
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

 // I removed IonicPage fom here //




/**
 * Generated class for the AddneweventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddneweventComponent = (function () {
    function AddneweventComponent(navCtrl, navParams, formBuilder, http, shareProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.shareProvider = shareProvider;
        this.viewCtrl = viewCtrl;
        this.data = {};
        this.submitAttempt = false;
        this.data.response = '';
        this.data.error = '';
        this.addEventForm = formBuilder.group({
            date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            time: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(50)])],
            desc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(200)])],
            // Venue (street, apt/unit, city, state, zipcode, country) //
            vstreet: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(200)])],
            vapt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)])],
            vcity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)])],
            vstate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)])],
            vzipcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            vcountry: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)])],
            // ============================ //
            // Focus on this audiance/group //
            selection: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            region: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)])],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)])],
            chapter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)])],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            intlchapter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            // ==== End ==== //
            imagefile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    AddneweventComponent.prototype.selectUSA = function () {
        this.data.usaSelected = true;
        this.data.intlSelected = false;
        this.addEventForm.get('country').setValidators([]);
        this.addEventForm.get('country').updateValueAndValidity();
        this.addEventForm.get('intlchapter').setValidators([]);
        this.addEventForm.get('intlchapter').updateValueAndValidity();
        this.addEventForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('region').updateValueAndValidity();
        this.addEventForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('state').updateValueAndValidity();
        this.addEventForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('chapter').updateValueAndValidity();
    };
    AddneweventComponent.prototype.selectInternational = function () {
        this.data.intlSelected = true;
        this.data.usaSelected = false;
        this.addEventForm.get('country').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('country').updateValueAndValidity();
        this.addEventForm.get('intlchapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('intlchapter').updateValueAndValidity();
        this.addEventForm.get('region').setValidators([]);
        this.addEventForm.get('region').updateValueAndValidity();
        this.addEventForm.get('state').setValidators([]);
        this.addEventForm.get('state').updateValueAndValidity();
        this.addEventForm.get('chapter').setValidators([]);
        this.addEventForm.get('chapter').updateValueAndValidity();
    };
    AddneweventComponent.prototype.populateUSARegions = function () {
        var _this = this;
        this.addEventForm.patchValue({ state: '', chapter: '' });
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
        this.addEventForm.get('country').setValidators([]);
        this.addEventForm.get('country').updateValueAndValidity();
        this.addEventForm.get('intlchapter').setValidators([]);
        this.addEventForm.get('intlchapter').updateValueAndValidity();
        this.addEventForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('region').updateValueAndValidity();
        this.addEventForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('state').updateValueAndValidity();
        this.addEventForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('chapter').updateValueAndValidity();
    };
    AddneweventComponent.prototype.populateUSAStatesByRegion = function () {
        var _this = this;
        this.addEventForm.patchValue({ state: '', chapter: '' });
        this.data.usachapters = [];
        var decoded_response = '';
        var body = new FormData();
        var regionid = this.addEventForm.controls.region.value;
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
        this.addEventForm.get('country').setValidators([]);
        this.addEventForm.get('country').updateValueAndValidity();
        this.addEventForm.get('intlchapter').setValidators([]);
        this.addEventForm.get('intlchapter').updateValueAndValidity();
        this.addEventForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('region').updateValueAndValidity();
        this.addEventForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('state').updateValueAndValidity();
        this.addEventForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('chapter').updateValueAndValidity();
    };
    AddneweventComponent.prototype.populateUSAChaptersByState = function () {
        var _this = this;
        this.addEventForm.patchValue({ chapter: '' });
        var decoded_response = '';
        var body = new FormData();
        var stateid = this.addEventForm.controls.state.value;
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
        this.addEventForm.get('country').setValidators([]);
        this.addEventForm.get('country').updateValueAndValidity();
        this.addEventForm.get('intlchapter').setValidators([]);
        this.addEventForm.get('intlchapter').updateValueAndValidity();
        this.addEventForm.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('region').updateValueAndValidity();
        this.addEventForm.get('state').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('state').updateValueAndValidity();
        this.addEventForm.get('chapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1)]);
        this.addEventForm.get('chapter').updateValueAndValidity();
    };
    AddneweventComponent.prototype.populateCountries = function () {
        var _this = this;
        this.addEventForm.patchValue({ country: '', intlchapter: '' });
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
        this.addEventForm.get('country').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('country').updateValueAndValidity();
        this.addEventForm.get('intlchapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('intlchapter').updateValueAndValidity();
        this.addEventForm.get('region').setValidators([]);
        this.addEventForm.get('region').updateValueAndValidity();
        this.addEventForm.get('state').setValidators([]);
        this.addEventForm.get('state').updateValueAndValidity();
        this.addEventForm.get('chapter').setValidators([]);
        this.addEventForm.get('chapter').updateValueAndValidity();
    };
    AddneweventComponent.prototype.populateIntlChaptersByReg = function () {
        var _this = this;
        this.addEventForm.patchValue({ intlchapter: '' });
        var decoded_response = '';
        var body = new FormData();
        var countryid = this.addEventForm.controls.country.value;
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
        this.addEventForm.get('country').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('country').updateValueAndValidity();
        this.addEventForm.get('intlchapter').setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
        this.addEventForm.get('intlchapter').updateValueAndValidity();
        this.addEventForm.get('region').setValidators([]);
        this.addEventForm.get('region').updateValueAndValidity();
        this.addEventForm.get('state').setValidators([]);
        this.addEventForm.get('state').updateValueAndValidity();
        this.addEventForm.get('chapter').setValidators([]);
        this.addEventForm.get('chapter').updateValueAndValidity();
    };
    AddneweventComponent.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
    };
    AddneweventComponent.prototype.canceladdevent = function () {
        this.viewCtrl.dismiss();
    };
    AddneweventComponent.prototype.addnewevent = function () {
        var _this = this;
        var body = new FormData();
        body.append('imagefile', this.file);
        this.http.post(this.shareProvider.server + 'events/addevent.php', body)
            .subscribe(function (data) {
            _this.data.error = data;
        }, function (error) {
            _this.data.error = error;
            //this.data.error = "Problem signing up for LAMA.  Please check your internet connection.  Contact administrator if problem persists.";
            //console.log("Oooops!");
        });
    };
    AddneweventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addnewevent',template:/*ion-inline-start:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\components\addnewevent\addnewevent.html"*/'\n\n  <table width="100%" height="100%">\n\n    <tr width="100%" height="100%">\n\n      <td width="100%" height="100%" align="center">\n\n        <div class="container">\n\n          <ion-card-content text-wrap>\n\n	      	  <form [formGroup]="addEventForm">\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-12 col-sm-12 col-md-6 col-xl-4>\n\n                    <h5>EVENT DETAILS</h5>\n\n                    <ion-label class="invalidmsg">{{data.error}}</ion-label>\n\n                  	<ion-item [class.invalid]="!addEventForm.controls.title.valid && (addEventForm.controls.title.dirty || submitAttempt)">\n\n                      <ion-label fixed>Event Title</ion-label>\n\n                      <ion-input formControlName="title" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.title.valid  && (addEventForm.controls.title.dirty || submitAttempt)">Please enter title for this event.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.desc.valid && (addEventForm.controls.desc.dirty || submitAttempt)">\n\n                      <ion-label fixed>Event Description</ion-label>\n\n                      <ion-input formControlName="desc" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.desc.valid  && (addEventForm.controls.desc.dirty || submitAttempt)">Please enter description for this event.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.date.valid && (addEventForm.controls.date.dirty || submitAttempt)">\n\n                      <ion-label fixed>Event Date</ion-label>\n\n                      <!--ion-input formControlName="title" type="text"></ion-input-->\n\n                      <ion-datetime formControlName="date" displayFormat="MM/DD/YYYY"></ion-datetime>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.date.valid  && (addEventForm.controls.date.dirty || submitAttempt)">Please enter date for this event.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.time.valid && (addEventForm.controls.time.dirty || submitAttempt)">\n\n                      <ion-label fixed>Event Time</ion-label>\n\n                      <!--ion-input formControlName="title" type="text"></ion-input-->\n\n                      <ion-datetime formControlName="time" displayFormat="h:m:a"></ion-datetime>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.time.valid  && (addEventForm.controls.time.dirty || submitAttempt)">Please enter time for this event.</p>\n\n                  </ion-col>\n\n\n\n                  <ion-col col-12 col-sm-12 col-md-6 col-xl-4>\n\n                    <h5>VENUE</h5>\n\n                    <ion-item [class.invalid]="!addEventForm.controls.vstreet.valid && (addEventForm.controls.vstreet.dirty || submitAttempt)">\n\n                      <ion-label fixed>Street</ion-label>\n\n                      <ion-input formControlName="vstreet" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.vstreet.valid  && (addEventForm.controls.vstreet.dirty || submitAttempt)">Please enter street.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.vapt.valid && (addEventForm.controls.vapt.dirty || submitAttempt)">\n\n                      <ion-label fixed>Apt/Unit</ion-label>\n\n                      <ion-input formControlName="vapt" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.vapt.valid  && (addEventForm.controls.vapt.dirty || submitAttempt)">Please enter apt/unit.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.vcity.valid && (addEventForm.controls.vcity.dirty || submitAttempt)">\n\n                      <ion-label fixed>City</ion-label>\n\n                      <ion-input formControlName="vcity" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.vcity.valid  && (addEventForm.controls.vcity.dirty || submitAttempt)">Please enter city.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.vstate.valid && (addEventForm.controls.vstate.dirty || submitAttempt)">\n\n                      <ion-label fixed>State</ion-label>\n\n                      <ion-input formControlName="vstate" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.vstate.valid  && (addEventForm.controls.vstate.dirty || submitAttempt)">Please enter state.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.vzipcode.valid && (addEventForm.controls.vzipcode.dirty || submitAttempt)">\n\n                      <ion-label fixed>Zip Code</ion-label>\n\n                      <ion-input formControlName="vzipcode" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.vzipcode.valid  && (addEventForm.controls.vzipcode.dirty || submitAttempt)">Please enter zip code.</p>\n\n\n\n                    <ion-item [class.invalid]="!addEventForm.controls.vcountry.valid && (addEventForm.controls.vcountry.dirty || submitAttempt)">\n\n                      <ion-label fixed>Country</ion-label>\n\n                      <ion-input formControlName="vcountry" type="text"></ion-input>\n\n                    </ion-item>\n\n                    <p class="invalidmsg" *ngIf="!addEventForm.controls.vcountry.valid  && (addEventForm.controls.vcountry.dirty || submitAttempt)">Please enter Country.</p>\n\n                  </ion-col>\n\n\n\n                  <ion-col col-12 col-sm-12 col-md-6 col-xl-4>\n\n                    <h5>TARGET AUDIANCE</h5>\n\n                    <ion-list radio-group formControlName="selection" padding-top no-lines>\n\n                      <table>\n\n                        <tr>\n\n                          <td>\n\n                            <ion-item padding-right>\n\n                              <ion-label>USA</ion-label>\n\n                              <ion-radio padding-right value="usa" (click)="selectUSA()"></ion-radio>\n\n                            </ion-item>\n\n                          </td>\n\n                          <td>\n\n                            <ion-item>\n\n                              <ion-label>International</ion-label>\n\n                              <ion-radio value="international" (click)="selectInternational()"></ion-radio>\n\n                            </ion-item>\n\n                          </td>\n\n                        </tr>\n\n                      </table>\n\n                      <p class="invalidmsg" class="invalidmsg" *ngIf="(submitAttempt && !addEventForm.controls.selection.valid)">Select USA or International.</p>\n\n                    </ion-list>\n\n\n\n                    <div id="usainfo" *ngIf="data.usaSelected">\n\n                        <ion-list>\n\n                            <ion-item [class.invalid]="!addEventForm.controls.region.valid && (addEventForm.controls.region.dirty || submitAttempt)">\n\n                              <ion-label>Region</ion-label>\n\n                              <ion-select formControlName="region" interface=popover>\n\n                                  <ion-option (ionSelect)="populateUSAStatesByRegion()" *ngFor="let curregion of data.usaregions" [value]="curregion.id">{{curregion.name}}</ion-option>\n\n                              </ion-select>\n\n                            </ion-item>\n\n                            <p class="invalidmsg" *ngIf="!addEventForm.controls.region.valid && (addEventForm.controls.region.dirty || submitAttempt)">Please select Region.</p>\n\n                            <ion-item [class.invalid]="!addEventForm.controls.state.valid && (addEventForm.controls.state.dirty || submitAttempt)">\n\n                              <ion-label>State</ion-label>\n\n                              <ion-select formControlName="state" interface=popover>\n\n                                  <ion-option (ionSelect)="populateUSAChaptersByState()" *ngFor="let curstate of data.usastates" [value]="curstate.id">{{curstate.name}}</ion-option>\n\n                              </ion-select>\n\n                            </ion-item>\n\n                            <p class="invalidmsg" *ngIf="!addEventForm.controls.state.valid && (addEventForm.controls.state.dirty || submitAttempt)">Please select State.</p>\n\n                            <ion-item [class.invalid]="!addEventForm.controls.chapter.valid && (addEventForm.controls.chapter.dirty || submitAttempt)">\n\n                              <ion-label>Chapter</ion-label>\n\n                              <ion-select formControlName="chapter" interface=popover>\n\n                                  <ion-option *ngFor="let curchap of data.usachapters" [value]="curchap.id">{{curchap.name}}</ion-option>\n\n                              </ion-select>\n\n                            </ion-item>\n\n                            <p class="invalidmsg" *ngIf="!addEventForm.controls.chapter.valid && (addEventForm.controls.chapter.dirty || submitAttempt)">Please select Chapter.</p>\n\n                        </ion-list>\n\n                      </div>\n\n\n\n                      <div id="intlinfo" *ngIf="data.intlSelected">\n\n                        <ion-list>\n\n                          <ion-item [class.invalid]="!addEventForm.controls.country.valid && (addEventForm.controls.country.dirty || submitAttempt)">\n\n                            <ion-label>Country</ion-label>\n\n                            <ion-select formControlName="country" interface=popover>\n\n                              <ion-option (ionSelect)="populateIntlChaptersByReg()" *ngFor="let curcountry of data.countries" [value]="curcountry.id">{{curcountry.name}}</ion-option>\n\n                            </ion-select>\n\n                          </ion-item>\n\n                          <p class="invalidmsg" *ngIf="!addEventForm.controls.country.valid && (addEventForm.controls.country.dirty || submitAttempt)">Please select Country.</p>\n\n                          <ion-item [class.invalid]="!addEventForm.controls.intlchapter.valid && (addEventForm.controls.intlchapter.dirty || submitAttempt)">\n\n                            <ion-label>Chapter</ion-label>\n\n                            <ion-select formControlName="intlchapter" interface=popover>\n\n                              <ion-option *ngFor="let curintlchap of data.intlchapters" [value]="curintlchap.id">{{curintlchap.name}}</ion-option>\n\n                            </ion-select>\n\n                          </ion-item>\n\n                          <p class="invalidmsg" *ngIf="!addEventForm.controls.intlchapter.valid && (addEventForm.controls.intlchapter.dirty || submitAttempt)">Please select Chapter.</p>\n\n                        </ion-list>\n\n                      </div>\n\n                  </ion-col>\n\n\n\n                  <ion-col col-12 col-sm-12 col-md-6 col-xl-4>\n\n                    <h5>UPLOAD PHOTO</h5>\n\n                    <ion-item [class.invalid]="!addEventForm.controls.imagefile.valid && (addEventForm.controls.imagefile.dirty || submitAttempt)">\n\n                      <!--ion-label fixed>Photo:</ion-label-->\n\n                      <input formControlName="imagefile" type="file" accept="image/*" (change)="changeListener($event)">\n\n                    </ion-item>\n\n                    <!--p class="invalidmsg" *ngIf="!addEventForm.controls.imagefile.valid  && (addEventForm.controls.imagefile.dirty || submitAttempt)">Please browse and select photo.</p-->\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-12>\n\n                    <table>\n\n                      <tr>\n\n                        <td>\n\n                          <button ion-button small round (click)="canceladdevent()">Cancel</button>\n\n                        </td>\n\n                        <td>\n\n                          <button ion-button small round (click)="addnewevent()">Add Event</button>\n\n                        </td>\n\n                      </tr>\n\n                    </table>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n         	  </form>\n\n            {{data.response}}\n\n            {{addEventForm.controls[\'imagefile\'].value}}\n\n         </ion-card-content>\n\n        </div>\n\n      </td>\n\n    </tr>\n\n  </table>\n\n'/*ion-inline-end:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\components\addnewevent\addnewevent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], AddneweventComponent);
    return AddneweventComponent;
}());

//# sourceMappingURL=addnewevent.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_qrcode2__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_qrcode__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_share_share__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_addnewevent_addnewevent__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__components_addnewevent_addnewevent__["a" /* AddneweventComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/application/application.module#ApplicationPageModule', name: 'ApplicationPage', segment: 'application', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventcheckin/eventcheckin.module#EventcheckinPageModule', name: 'EventcheckinPage', segment: 'eventcheckin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventsmgmg/eventsmgmg.module#EventsmgmgPageModule', name: 'EventsmgmgPage', segment: 'eventsmgmg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupconfirmation/signupconfirmation.module#SignupconfirmationPageModule', name: 'SignupconfirmationPage', segment: 'signupconfirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupsuccess/signupsuccess.module#SignupsuccessPageModule', name: 'SignupsuccessPage', segment: 'signupsuccess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/starter/starter.module#StarterPageModule', name: 'StarterPage', segment: 'starter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_qrcode2__["a" /* NgxQRCodeModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__components_addnewevent_addnewevent__["a" /* AddneweventComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_share_share__["a" /* ShareProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareProvider = (function () {
    function ShareProvider() {
        //splitpaneviewnav:any = {}
        //connection:any = {};
        //session:any = {};
        //user:any = {};
        this.curentpage = '';
        this.server = '';
        this.sessionid = '';
        this.role = '';
        this.username = '';
        this.firstname = '';
        this.lastname = '';
        this.curentpage = 'StarterPage';
        this.server = "https://lama.tierrasky.com/backend/";
        //this.connection.headers = new Headers({ 'Content-Type': 'application/json' });
        this.sessionid = "";
        this.role = "member";
        this.username = "";
        this.firstname = "";
        this.lastname = "";
    }
    ShareProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShareProvider);
    return ShareProvider;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(351);
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






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_share_share__["a" /* ShareProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map