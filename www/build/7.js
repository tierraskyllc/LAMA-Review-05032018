webpackJsonp([7],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_qrcode2__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_share__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http } from '@angular/http';


// import { NgxQRCodeModule } from 'ngx-qrcode2';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { QRCodeModule } from 'angular2-qrcode';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    // from the below constructor I am removing private http: Http, and private barcodeScanner: BarcodeScanner, private ngxQRCodeModule: NgxQRCodeModule//
    function ProfilePage(navCtrl, navParams, shareProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareProvider = shareProvider;
        this.createdCode = null;
        this.createdCode = '{username":"' + this.shareProvider.username + '", "firstname":"' + this.shareProvider.firstname + '" , "lastname":"' + this.shareProvider.lastname + '"}';
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle>\n\n  		<ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      L.A.M.A. Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <table width="100%">\n\n    <tr width="100%">\n\n      <td align="center" valign="top" colspan="2">\n\n        <h4>FirstName LastName</h4>\n\n      </td>\n\n    </tr>\n\n    <tr width="100%">\n\n      <td align="center" valign="top" colspan="2">\n\n        Membership Status<br>(Active/Expired/Revoked)\n\n      </td>\n\n    </tr>\n\n    <tr style="height: 3em;">\n\n      <td>\n\n      </td>\n\n    </tr>\n\n    <tr width="100%">\n\n      <td valign="top" width="50%" align="right">\n\n        <div><img src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2018/cc28348a-ba9d-4415-be78-e2710c61cbd2.png"\></div>\n\n      </td>\n\n      <td valign="top" width="50%" align="left">\n\n        <div>\n\n          <!--img src="https://i.ytimg.com/vi/Q6xybdaV3xs/maxresdefault.jpg"\-->\n\n          <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n          <!--jquery(\'#qrcode\').qrcode("this plugin is great");-->\n\n          <qr-code [value]="\'All QR Code data goes here!\'" [size]="150"></qr-code>\n\n        </div>\n\n      </td>\n\n    </tr>\n\n  </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_share_share__["a" /* ShareProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map