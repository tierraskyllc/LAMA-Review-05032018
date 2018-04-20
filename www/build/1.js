webpackJsonp([1],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupsuccessPageModule", function() { return SignupsuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupsuccess__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupsuccessPageModule = (function () {
    function SignupsuccessPageModule() {
    }
    SignupsuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signupsuccess__["a" /* SignupsuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signupsuccess__["a" /* SignupsuccessPage */]),
            ],
        })
    ], SignupsuccessPageModule);
    return SignupsuccessPageModule;
}());

//# sourceMappingURL=signupsuccess.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupsuccessPage; });
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



/**
 * Generated class for the SignupsuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupsuccessPage = (function () {
    function SignupsuccessPage(navCtrl, navParams, shareProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareProvider = shareProvider;
    }
    SignupsuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupsuccessPage');
    };
    SignupsuccessPage.prototype.login = function () {
        this.shareProvider.curentpage = 'StarterPage';
    };
    SignupsuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signupsuccess',template:/*ion-inline-start:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/signupsuccess/signupsuccess.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <table width="100%" height="100%">\n    <tr width="100%" height="100%">\n      <td width="100%" height="100%" align="center">\n        <div class="container">\n          <ion-card-content>\n	           <p class="highlightedmsg">Thank you for creating your account with L.A.M.A.  Please click the confirmation link sent to you via email.</p><button ion-button clear (click)="login()">CLICK HERE</button><p class="highlightedmsg"> to log in to your accont.</p>\n          </ion-card-content>\n        </div>\n      </td>\n    </tr>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/signupsuccess/signupsuccess.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_share_share__["a" /* ShareProvider */]])
    ], SignupsuccessPage);
    return SignupsuccessPage;
}());

//# sourceMappingURL=signupsuccess.js.map

/***/ })

});
//# sourceMappingURL=1.js.map