webpackJsonp([1],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__(739);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestPageModule = (function () {
    function TestPageModule() {
    }
    TestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */]),
            ],
        })
    ], TestPageModule);
    return TestPageModule;
}());

//# sourceMappingURL=test.module.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestPage = (function () {
    function TestPage(navCtrl, fb) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.validations_form = this.fb.group({
            motorcycles: this.fb.array([
                this.getInitialMotorcycle()
            ])
        });
    }
    TestPage.prototype.getInitialMotorcycle = function () {
        return this.fb.group({
            color: [''],
            year: [''],
            make: [''],
            model: [''],
            currentMileage: [''],
        });
    };
    TestPage.prototype.addMotorcycle = function () {
        var control = this.validations_form.controls['motorcycles'];
        control.push(this.getInitialMotorcycle());
    };
    TestPage.prototype.removeMotorcycle = function (i) {
        var control = this.validations_form.controls['motorcycles'];
        control.removeAt(i);
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'test-page',template:/*ion-inline-start:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/test/test.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Test Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n      <ion-card-header>Motorcycle Information</ion-card-header>\n    <form [formGroup]="validations_form">\n      <!-- Add Motorcycle Information -->\n      <ion-list>\n        <ion-list formArrayName="motorcycles" no-lines>\n          <div *ngFor="let validations_form of validations_form.controls.motorcycles.controls; let i=index">\n            <div [formGroupName]="i">\n              <ion-card-header>Motorcycle #{{ i + 1 }}\n                <ion-buttons end>\n                  <button ion-button outline (click)="removeMotorcycle(i)" color="danger" type="button"><ion-icon name="trash"></ion-icon></button>\n                </ion-buttons>\n              </ion-card-header>\n              <ion-item>\n                <ion-input type="text" formControlName="color" required placeholder="Black"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="text" formControlName="year" required placeholder="1999"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="text" formControlName="make" required placeholder="Honda"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="text" formControlName="model" required placeholder="Goldwing"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" formControlName="currentMileage" placeholder="Current Mileage"></ion-input>\n              </ion-item>\n            </div>\n          </div>\n          <button ion-button small (click)="addMotorcycle()" color="dark" type="button">Add Motorcycle</button>\n        </ion-list>\n      </ion-list>\n\n    </form>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"/home/ralix/TierraSky/Ionic/LAMA-copy/LAMA-copy/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ })

});
//# sourceMappingURL=1.js.map