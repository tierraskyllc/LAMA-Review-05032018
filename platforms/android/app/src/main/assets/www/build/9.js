webpackJsonp([9],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsmgmgPageModule", function() { return EventsmgmgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventsmgmg__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventsmgmgPageModule = (function () {
    function EventsmgmgPageModule() {
    }
    EventsmgmgPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__eventsmgmg__["a" /* EventsmgmgPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__eventsmgmg__["a" /* EventsmgmgPage */]),
            ],
        })
    ], EventsmgmgPageModule);
    return EventsmgmgPageModule;
}());

//# sourceMappingURL=eventsmgmg.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsmgmgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_addnewevent_addnewevent__ = __webpack_require__(354);
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
 * Generated class for the EventsmgmgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsmgmgPage = (function () {
    function EventsmgmgPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.addEventsData = {};
    }
    EventsmgmgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsmgmgPage');
    };
    EventsmgmgPage.prototype.presentPopover = function () {
        //let popover = this.popoverCtrl.create(AddneweventComponent, {}, { cssClass: 'custom-popover'});
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_addnewevent_addnewevent__["a" /* AddneweventComponent */]);
        popover.present();
    };
    EventsmgmgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-eventsmgmg',template:/*ion-inline-start:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\eventsmgmg\eventsmgmg.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle>\n\n  		<ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      L.A.M.A. Events Management\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <table width="100%">\n\n    <tr width="100%">\n\n      <td align="left" valign="top" colspan="2" style="padding-left: 25px;">\n\n        <button ion-button outline (click)="presentPopover($event)">Add Event</button>\n\n      </td>\n\n    </tr>\n\n    <tr width="100%">\n\n      <td align="center" valign="top" colspan="2">\n\n        <div>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12 col-sm-6 col-md-4 col-xl-3>\n\n                <div style="border-radius: 30px !important; border: 3px solid #FAFAFA; padding: 10px;">\n\n                  <table width="100%">\n\n                    <tr>\n\n                      <td colspan="2">\n\n                        <div class="image-container" [style.background-image]="\'url(https://i.pinimg.com/736x/fc/58/ab/fc58aba1873f6338aa5bacca4b8597f4.jpg)\'">\n\n                        </div>\n\n                      </td>\n\n                    </tr>\n\n                    <tr>\n\n                      <td width="30%">\n\n                        <img src="./assets/imgs/edit.png" style="max-width: 25px; max-height: 25px;">\n\n                        <img src="./assets/imgs/delete.png" style="max-width: 25px; max-height: 25px;">\n\n                      </td>\n\n                      <td width="70%" valign="middle" align="left" style="vertical-align: middle; text-align: left;">\n\n                        Saturday, April 1, 2:15 PM\n\n                      </td>\n\n                    </tr>\n\n                    <tr>\n\n                      <td colspan="2" align="center" valign="middle">\n\n                        <div style="height: 2.4em; overflow: hidden; font-weight: bold;">\n\n                          Beginner Bikers\' MeetUp \n\n                        </div>\n\n                      </td>\n\n                    </tr>\n\n                  </table>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col col-12 col-sm-6 col-md-4 col-xl-3>\n\n                <div style="border-radius: 30px !important; border: 3px solid #FAFAFA; padding: 10px;">\n\n                  <table width="100%">\n\n                    <tr>\n\n                      <td colspan="2">\n\n                        <div class="image-container" [style.background-image]="\'url(https://i.pinimg.com/736x/fc/58/ab/fc58aba1873f6338aa5bacca4b8597f4.jpg)\'">\n\n                        </div>\n\n                      </td>\n\n                    </tr>\n\n                    <tr>\n\n                      <td width="25%">\n\n                        <img src="./assets/imgs/edit.png" style="max-width: 25px; max-height: 25px;">\n\n                        <img src="./assets/imgs/delete.png" style="max-width: 25px; max-height: 25px;">\n\n                      </td>\n\n                      <td width="75%" valign="middle" align="left" style="vertical-align: middle; text-align: left;">\n\n                        Wednesday, April 8, 1:30 PM\n\n                      </td>\n\n                    </tr>\n\n                    <tr>\n\n                      <td colspan="2" align="center" valign="middle">\n\n                        <div style="height: 2.4em; overflow: hidden; font-weight: bold;">\n\n                          Experienced Bikers\' MeetUp \n\n                        </div>\n\n                      </td>\n\n                    </tr>\n\n                  </table>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col col-12 col-sm-6 col-md-4 col-xl-3>\n\n                <div style="border-radius: 30px !important; border: 3px solid #FAFAFA; padding: 10px;">\n\n                  <table width="100%">\n\n                    <tr>\n\n                      <td colspan="2">\n\n                        <div class="image-container" [style.background-image]="\'url(https://i.pinimg.com/736x/fc/58/ab/fc58aba1873f6338aa5bacca4b8597f4.jpg)\'">\n\n                        </div>\n\n                      </td>\n\n                    </tr>\n\n                    <tr>\n\n                      <td width="25%">\n\n                        <img src="./assets/imgs/edit.png" style="max-width: 25px; max-height: 25px;">\n\n                        <img src="./assets/imgs/delete.png" style="max-width: 25px; max-height: 25px;">\n\n                      </td>\n\n                      <td width="75%" valign="middle" align="left" style="vertical-align: middle; text-align: left;">\n\n                        Friday, April 21, 1:30 PM\n\n                      </td>\n\n                    </tr>\n\n                    <tr>\n\n                      <td colspan="2" align="center" valign="middle">\n\n                        <div style="height: 2.4em; overflow: hidden; font-weight: bold;">\n\n                          Expert Bikers\' MeetUp \n\n                        </div>\n\n                      </td>\n\n                    </tr>\n\n                  </table>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </div>\n\n      </td>\n\n    </tr>\n\n  </table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vkgandhi84\Projects\LAMA\Source\LAMAv1\LAMA-copy\src\pages\eventsmgmg\eventsmgmg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], EventsmgmgPage);
    return EventsmgmgPage;
}());

//# sourceMappingURL=eventsmgmg.js.map

/***/ })

});
//# sourceMappingURL=9.js.map