webpackJsonp([3],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_share__ = __webpack_require__(63);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, http, shareProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.shareProvider = shareProvider;
        this.data = {};
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
    SignupPage.prototype.ionViewDidLoad = function () {
        this.populateUSARegions();
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.selectUSA = function () {
        this.data.usaSelected = true;
        this.data.intlSelected = false;
    };
    SignupPage.prototype.selectInternational = function () {
        this.data.intlSelected = true;
        this.data.usaSelected = false;
    };
    SignupPage.prototype.submit = function () {
        var _this = this;
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
            .subscribe(function (data) {
            json_encoded_response = data["_body"];
            _this.data.response = json_encoded_response;
            decoded_response = JSON.parse(json_encoded_response);
            _this.shareProvider.sessionid = decoded_response.sessionid;
            _this.data.username = decoded_response.username;
            _this.data.firstname = decoded_response.firstname;
            _this.data.lastname = decoded_response.lastname;
            _this.data.response = _this.shareProvider.sessionid;
        }, function (error) {
            _this.data.error = error;
            console.log("Oooops!");
        });
    };
    SignupPage.prototype.populateUSARegions = function () {
        var _this = this;
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
            _this.data.error = error;
            console.log("Oooops!");
        });
    };
    SignupPage.prototype.populateUSAStatesByRegion = function () {
        var _this = this;
        this.data.usachapters = [];
        var decoded_response = '';
        var body = new FormData();
        var regionid = this.data.region;
        body.append('regionid', regionid);
        this.http.post(this.shareProvider.server + 'usastatesbyregion.php', body)
            .subscribe(function (data) {
            decoded_response = JSON.parse(data["_body"]);
            if (decoded_response[0]) {
                _this.data.usastates = decoded_response[2];
            }
        }, function (error) {
            _this.data.error = error;
            console.log("Oooops!");
        });
    };
    SignupPage.prototype.populateUSAChaptersByState = function () {
        var _this = this;
        var decoded_response = '';
        var body = new FormData();
        var stateid = this.data.state;
        body.append('stateid', stateid);
        this.http.post(this.shareProvider.server + 'usachaptersbystate.php', body)
            .subscribe(function (data) {
            decoded_response = JSON.parse(data["_body"]);
            if (decoded_response[0]) {
                _this.data.usachapters = decoded_response[2];
            }
        }, function (error) {
            _this.data.error = error;
            console.log("Oooops!");
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  {{data.response}}\n  {{data.error}}\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input type="text" name="firstname" [(ngModel)]="data.firstname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input type="text" name="lastname" [(ngModel)]="data.lastname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" name="username" [(ngModel)]="data.username"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" name="password" [(ngModel)]="data.password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Confirm Password</ion-label>\n    <ion-input type="password" name="confirmpasswd" [(ngModel)]="data.confirmpasswd"></ion-input>\n  </ion-item>\n  <br>\n  <ion-list radio-group>\n    <table>\n      <tr>\n        <td>\n          <ion-item>\n            <ion-label>USA</ion-label>\n            <ion-radio name="selection" value="usa" (click)="selectUSA()"></ion-radio>\n          </ion-item>\n        </td>\n        <td>\n          <ion-item>\n            <ion-label>International</ion-label>\n            <ion-radio name="selection" value="international" (click)="selectInternational()"></ion-radio>\n          </ion-item>\n        </td>\n      </tr>\n    </table>\n  </ion-list>\n  <div id="usainfo" *ngIf="data.usaSelected">\n    USA Input Fields Goes Here\n    <ion-list>\n      <ion-item>\n        <ion-label>Region</ion-label>\n        <ion-select name="region" interface=popover [(ngModel)]="data.region">\n          <ion-option (ionSelect)="populateUSAStatesByRegion()" *ngFor="let curregion of data.usaregions" [value]="curregion.id">{{curregion.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select name="state" interface=popover [(ngModel)]="data.state">\n          <ion-option (ionSelect)="populateUSAChaptersByState()" *ngFor="let curstate of data.usastates" [value]="curstate.id">{{curstate.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Chapter</ion-label>\n        <ion-select name="chapter" interface=popover [(ngModel)]="data.chapter">\n          <ion-option *ngFor="let curchap of data.usachapters" [value]="curchap.id">{{curchap.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div id="intlinfo" *ngIf="data.intlSelected">\n    Internation Input Fields Goes Here\n  </div>\n  <button ion-button block (click)="submit()">Signup</button>\n</ion-content>\n'/*ion-inline-end:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_share_share__["a" /* ShareProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=3.js.map