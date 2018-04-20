webpackJsonp([0],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterPageModule", function() { return StarterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starter__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StarterPageModule = (function () {
    function StarterPageModule() {
    }
    StarterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__starter__["a" /* StarterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__starter__["a" /* StarterPage */]),
            ],
        })
    ], StarterPageModule);
    return StarterPageModule;
}());

//# sourceMappingURL=starter.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
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
 * Generated class for the StarterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StarterPage = (function () {
    function StarterPage(navCtrl, navParams, formBuilder, http, shareProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.shareProvider = shareProvider;
        this.data = {};
        this.submitAttempt = false;
        this.data.response = '';
        this.data.error = '';
        this.signInForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('.+@.+')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    StarterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StarterPage');
    };
    StarterPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.signInForm.valid) {
            var body = new FormData();
            var json_encoded_response = '';
            var decoded_response = JSON.parse('{"sessionid":"", "username":"", "firstname":"" , "lastname":""}');
            body.append('username', this.signInForm.controls.username.value);
            body.append('password', this.signInForm.controls.password.value);
            this.http.post(this.shareProvider.server + 'signin/signin.php', body)
                .subscribe(function (data) {
                //this.data.response = data["_body"];
                json_encoded_response = data["_body"];
                decoded_response = JSON.parse(json_encoded_response);
                if (decoded_response[0] == true) {
                    _this.shareProvider.sessionid = decoded_response[2];
                    _this.shareProvider.username = decoded_response[3];
                    _this.shareProvider.firstname = decoded_response[4];
                    _this.shareProvider.lastname = decoded_response[5];
                    if (decoded_response[6] != null) {
                        _this.shareProvider.role = decoded_response[6];
                    }
                    _this.shareProvider.curentpage = 'ProfilePage';
                }
                else if (decoded_response[0] == false) {
                    _this.data.error = decoded_response[2];
                }
                else {
                    _this.data.error = decoded_response[1];
                }
            }, function (error) {
                _this.data.error = error;
                console.log("Oooops!");
            });
        }
    };
    StarterPage.prototype.signup = function () {
        this.shareProvider.curentpage = 'RegisterPage';
    };
    StarterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-starter',template:/*ion-inline-start:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/starter/starter.html"*/'<ion-header>\n  <ion-navbar>\n  	<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      L.A.M.A.\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <table width="100%" height="100%">\n    <tr width="100%" height="100%">\n      <td width="100%" height="100%" align="center">\n        <div class="container">\n\n          <ion-card-content text-wrap>\n            <!---->\n            <div class="home-hello">\n                <img src="/assets/imgs/thelffl.png"/>\n                <div class="hello-title">\n                  <h1>International & National</h1>\n                  Motorcycle Association\n                </div>\n              </div>\n            <!---->\n           <form [formGroup]="signInForm">\n                  <ion-label class="invalidmsg">{{data.error}}</ion-label>\n                  <ion-item [class.invalid]="!signInForm.controls.username.valid && (signInForm.controls.username.dirty || submitAttempt)">\n                      <ion-label fixed>Email</ion-label>\n                      <ion-input formControlName="username" type="text"></ion-input>\n                  </ion-item>\n                  <!--p class="invalidmsg" *ngIf="!signUpForm.controls.username.valid  && (signUpForm.controls.username.dirty || submitAttempt)">Please enter a valid Email Address.</p-->\n                  <ion-item [class.invalid]="!signInForm.controls.password.valid && (signInForm.controls.password.dirty || submitAttempt)">\n                      <ion-label fixed>Password</ion-label>\n                      <ion-input formControlName="password" type="password"></ion-input>\n                  </ion-item>\n                  <!--p class="invalidmsg" *ngIf="!signUpForm.controls.password.valid  && (signUpForm.controls.password.dirty || submitAttempt)">Please enter a valid Password.</p-->\n                <table width="100%">\n                  <tr width="100%">\n                    <td width="100%" align="center">\n                      <button ion-button small round (click)="login()">Sign In</button>\n                    </td>\n                  </tr>\n                  <tr width="100%">\n                    <td width="100%" style="text-align: center;">\n                      <button ion-button clear (click)="signup()">Click here to SIGN UP</button>\n                    </td>\n                  </tr>\n                </table>\n            </form>\n            <!--Session ID: {{shareProvider.sessionid}}\n            Username: {{shareProvider.username}}<br>\n            First Name: {{shareProvider.firstname}}<br>\n            Last Name: {{shareProvider.lastname}}<br>-->\n            <!--Password: {{signUpForm.controls[\'password\'].value}}<br>\n            Confirm Password: {{signUpForm.controls[\'confirmpasswd\'].value}}<br>\n            Selection: {{signUpForm.controls[\'selection\'].value}}<br>\n            Region: {{signUpForm.controls[\'region\'].value}}<br>\n            State: {{signUpForm.controls[\'state\'].value}}<br>\n            Chapter: {{signUpForm.controls[\'chapter\'].value}}<br>\n            {{data.response}}\n            Is form valid?: {{signUpForm.valid}}-->\n          </ion-card-content>\n        </div>\n      </td>\n    </tr>\n  </table>\n</ion-content>\n'/*ion-inline-end:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/starter/starter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_share_share__["a" /* ShareProvider */]])
    ], StarterPage);
    return StarterPage;
}());

//# sourceMappingURL=starter.js.map

/***/ })

});
//# sourceMappingURL=0.js.map