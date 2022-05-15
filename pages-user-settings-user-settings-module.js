(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-settings-user-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-settings/user-settings.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-settings/user-settings.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"user-settings-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/datapoints\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>User Settings</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user_settings\">\n    \n    \n    <ion-list class=\"user_settings__form\">\n            <ion-item>\n                <ion-label>\n                    <h2>Username</h2>\n                    <h3>{{user.username}}</h3>               \n                </ion-label>\n                <ion-button slot=\"end\" fill=\"clear\" color=\"primary\" (click)=\"changeSetting('username', 'Username', 'text')\">\n                    <ion-icon name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\n                    Change\n                </ion-button>                \n            </ion-item>\n\n            <ion-item>\n                <ion-label>\n                    <h2>First Name</h2>\n                    <h3>{{user.firstName}}</h3>               \n                </ion-label>\n                <ion-button slot=\"end\" fill=\"clear\" color=\"primary\" (click)=\"changeSetting('firstName', 'First Name', 'text')\">\n                    <ion-icon name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\n                    Change\n                </ion-button>                \n            </ion-item> \n\n            <ion-item>\n                <ion-label>\n                    <h2>Last Name</h2>\n                    <h3>{{user.lastName}}</h3>               \n                </ion-label>\n                <ion-button slot=\"end\" fill=\"clear\" color=\"primary\" (click)=\"changeSetting('lastName', 'Last Name', 'text')\">\n                    <ion-icon name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\n                    Change\n                </ion-button>                \n            </ion-item> \n        \n            <ion-item>\n                <ion-label>\n                    <h2>Email</h2>\n                    <h3>{{user.email}}</h3>               \n                </ion-label>\n                <ion-button slot=\"end\" fill=\"clear\" color=\"primary\" (click)=\"changeSetting('email', 'Email', 'email')\">\n                    <ion-icon name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\n                    Change\n                </ion-button>                \n            </ion-item>\n\n            <ion-item>\n                <ion-label>\n                    <h2>Mobile Phone</h2>\n                    <h3>{{user.mobileNumber ? user.mobileNumber : \"None\"}}</h3>               \n                </ion-label>\n                <ion-button slot=\"end\" fill=\"clear\" color=\"primary\" (click)=\"changeSetting('mobileNumber', 'Mobile Phone', 'tel')\">\n                    <ion-icon name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\n                    Change\n                </ion-button>                \n            </ion-item>   \n\n            <ion-item>\n                <ion-label>\n                    <h2>Password</h2>\n                    <h3>••••••••</h3>               \n                </ion-label>\n                <ion-button slot=\"end\" fill=\"clear\" color=\"primary\" (click)=\"changeSetting('password', 'Password', 'password')\">\n                    <ion-icon name=\"ios-arrow-forward\" slot=\"end\"></ion-icon>\n                    Change Password\n                </ion-button>                \n            </ion-item>       \n        \n\n    </ion-list>    \n    \n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user-settings/user-settings-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-settings/user-settings-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageRoutingModule", function() { return UserSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-settings.page */ "./src/app/pages/user-settings/user-settings.page.ts");




var routes = [
    {
        path: '',
        component: _user_settings_page__WEBPACK_IMPORTED_MODULE_3__["UserSettingsPage"]
    }
];
var UserSettingsPageRoutingModule = /** @class */ (function () {
    function UserSettingsPageRoutingModule() {
    }
    UserSettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserSettingsPageRoutingModule);
    return UserSettingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/user-settings/user-settings.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-settings/user-settings.module.ts ***!
  \*************************************************************/
/*! exports provided: UserSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageModule", function() { return UserSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-settings-routing.module */ "./src/app/pages/user-settings/user-settings-routing.module.ts");
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-settings.page */ "./src/app/pages/user-settings/user-settings.page.ts");







var UserSettingsPageModule = /** @class */ (function () {
    function UserSettingsPageModule() {
    }
    UserSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSettingsPageRoutingModule"]
            ],
            declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_6__["UserSettingsPage"]]
        })
    ], UserSettingsPageModule);
    return UserSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-settings/user-settings.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-settings/user-settings.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-settings-header ion-title {\n  font-family: \"Neatrif Studio\", sans-serif !important;\n  font-size: 24px;\n  line-height: 56px;\n  color: #33395D;\n}\n.user-settings-header ion-back-button {\n  font-family: \"NB International\", sans-serif !important;\n}\n@media screen and (max-width: 480px) {\n  .user-settings-header ion-title {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1zZXR0aW5ncy9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxkYXRhbm93L3NyY1xcYXBwXFxwYWdlc1xcdXNlci1zZXR0aW5nc1xcdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvREFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBUjtBREdJO0VBQ0ksc0RBQUE7QUNEUjtBRE9BO0VBQ0k7SUFDSSxlQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1zZXR0aW5ncy1oZWFkZXJ7XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOZWF0cmlmIFN0dWRpbycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDsgXHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzOTVEO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tYmFjay1idXR0b257XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOQiBJbnRlcm5hdGlvbmFsJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50OyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpIHtcclxuICAgIC51c2VyLXNldHRpbmdzLWhlYWRlciBpb24tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59IiwiLnVzZXItc2V0dGluZ3MtaGVhZGVyIGlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5lYXRyaWYgU3R1ZGlvXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgY29sb3I6ICMzMzM5NUQ7XG59XG4udXNlci1zZXR0aW5ncy1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiTkIgSW50ZXJuYXRpb25hbFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC51c2VyLXNldHRpbmdzLWhlYWRlciBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user-settings/user-settings.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-settings/user-settings.page.ts ***!
  \***********************************************************/
/*! exports provided: UserSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPage", function() { return UserSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var UserSettingsPage = /** @class */ (function () {
    function UserSettingsPage(storage, toastController, alertController) {
        var _this = this;
        this.storage = storage;
        this.toastController = toastController;
        this.alertController = alertController;
        this.user = {};
        this.storage.get("datanow_user").then(function (data) {
            _this.user = data;
        });
    }
    UserSettingsPage.prototype.ngOnInit = function () {
    };
    UserSettingsPage.prototype.changeSetting = function (name, title, inputType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputs, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputs = [
                            {
                                name: name,
                                type: inputType,
                                placeholder: title,
                                value: name !== "password" ? this.user[name] : ""
                            }
                        ];
                        if (name === "password") {
                            inputs.unshift({
                                name: "currentPassword",
                                type: inputType,
                                placeholder: "Current Password",
                                value: ""
                            });
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Change ' + title,
                                inputs: inputs,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                        }
                                    }, {
                                        text: 'Save',
                                        handler: function (data) {
                                            _this.user[name] = data[name];
                                            _this.presentToast();
                                        }
                                    }
                                ],
                                mode: "md"
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserSettingsPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: '<ion-icon name="md-checkmark"></ion-icon> Changes Saved',
                            duration: 2000,
                            color: 'dark',
                            mode: 'md'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserSettingsPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    UserSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-settings',
            template: __webpack_require__(/*! raw-loader!./user-settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-settings/user-settings.page.html"),
            styles: [__webpack_require__(/*! ./user-settings.page.scss */ "./src/app/pages/user-settings/user-settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UserSettingsPage);
    return UserSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-settings-user-settings-module.js.map