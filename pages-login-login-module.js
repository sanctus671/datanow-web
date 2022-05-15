(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login\" [ngClass]=\"{'login--ios' :  isIos}\">\r\n\r\n\r\n    <div class=\"login__main\">\r\n        \r\n        <div class=\"login__main__inner\">\r\n        \r\n            <div class=\"login__main__logo\">\r\n                <img src=\"assets/logo.svg\" />\r\n            </div>\r\n\r\n\r\n            <h1>Login</h1>\r\n\r\n            <ion-list class=\"login__main__form\">\r\n                    <ion-item class=\"ion-no-padding\" no-lines>\r\n                        <ion-label position=\"stacked\">Username</ion-label>\r\n                        <ion-input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"Username\"></ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-item class=\"ion-no-padding\">\r\n                        <ion-label position=\"stacked\">Password</ion-label>\r\n                        <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\"></ion-input>\r\n                    </ion-item>\r\n\r\n\r\n                    <ion-button color=\"primary\" class=\"login__main__form__login-button\" type=\"submit\" expand=\"block\" [disabled]=\"user.loading\" (click)=\"login()\">\r\n                        Login\r\n                        <ion-spinner *ngIf=\"user.loading\" name=\"circular\" color=\"light\"></ion-spinner>\r\n                    </ion-button>\r\n\r\n                    <p class=\"login__main__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\r\n\r\n\r\n                    <p class=\"login__main__form__forgot-password\" *ngIf=\"!isIos\"><a (click)=\"openLink('https://www.surveymonkey.com/r/V8M6RY2')\">Forgot your password?</a></p>\r\n\r\n            </ion-list>\r\n        \r\n        </div>\r\n        \r\n        \r\n        \r\n    </div>\r\n\r\n\r\n    <div class=\"login__secondary\" *ngIf=\"!isIos\">\r\n        \r\n        \r\n        <h2>Don't have an account?</h2>\r\n\r\n\r\n        <ion-button color=\"primary\" class=\"login__secondary__cta-button\" expand=\"block\" (click)=\"openLink('https://www.datanow.co.nz/contact/')\">\r\n            Get in Touch\r\n        </ion-button>\r\n        \r\n        \r\n        <p class=\"login__secondary__learn-more\"><a (click)=\"openLink('https://www.datanow.co.nz/')\">Learn more about Datanow</a></p>\r\n        \r\n        \r\n    </div>\r\n\r\n\r\n    \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  background-color: #051C3F;\n  --background:#051C3F;\n  height: 100vh;\n}\n.login.login--ios {\n  background-color: #ffffff;\n  --background:#ffffff;\n  height: auto;\n}\n.login .login__main {\n  background-color: white;\n  padding: 0px 40px;\n}\n.login .login__main .login__main__logo {\n  margin-bottom: 85px;\n}\n.login .login__main .login__main__inner {\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 100px 0px;\n}\n.login .login__main .login__main__inner h1 {\n  margin-bottom: 30px;\n}\n.login .login__main .login__main__inner .login__main__form ion-item {\n  --border-color: transparent;\n  margin-bottom: 10px;\n  --background-focused: white;\n}\n.login .login__main .login__main__inner .login__main__form ion-item ion-input {\n  background-color: #F4F8FB;\n  font-size: 16px;\n  border: 2px solid #DEE7EE;\n  box-sizing: border-box;\n  border-radius: 3px;\n  line-height: 31px;\n  --padding-start: 15px;\n}\n.login .login__main .login__main__inner .login__main__form ion-item .label-stacked.sc-ion-label-md-h {\n  margin-bottom: 10px;\n}\n.login .login__main .login__main__inner .login__main__form .login__main__form__login-button {\n  margin-top: 25px;\n}\n.login .login__main .login__main__inner .login__main__form .login__main__form__login-button ion-spinner {\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n.login .login__main .login__main__form__forgot-password {\n  text-align: center;\n  margin-top: 20px;\n}\n.login .login__main .login__main__form__error {\n  text-align: center;\n  color: red;\n}\n.login .login__secondary {\n  color: white;\n  text-align: center;\n  max-width: 580px;\n  margin: 0 auto;\n  padding: 50px 40px;\n}\n.login .login__secondary h2 {\n  margin-bottom: 30px;\n}\n.login .login__secondary .login__secondary__cta-button {\n  max-width: 400px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n}\n@media screen and (max-width: 480px) {\n  .login h1 {\n    font-size: 33px;\n    line-height: 40px;\n  }\n  .login h2 {\n    font-size: 22px;\n    line-height: 22px;\n  }\n  .login .login__main {\n    padding: 0px 30px;\n  }\n  .login .login__main .login__main__inner {\n    padding-top: 70px;\n    padding-bottom: 40px;\n  }\n  .login .login__main .login__main__logo {\n    margin-bottom: 65px;\n  }\n  .login .login__secondary {\n    padding: 50px 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcZGF0YW5vdy9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0FDQUo7QURFSTtFQUNDLHlCQUFBO0VBQ0Qsb0JBQUE7RUFDQSxZQUFBO0FDQUo7QURJSTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRElRO0VBQ0ksbUJBQUE7QUNGWjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtZO0VBQ0ksbUJBQUE7QUNIaEI7QURRZ0I7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsMkJBQUE7QUNQcEI7QURTb0I7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDUHhCO0FEYW9CO0VBQ0ksbUJBQUE7QUNYeEI7QURlZ0I7RUFDSSxnQkFBQTtBQ2JwQjtBRGVvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNieEI7QUR5QlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDdkJaO0FEMEJRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDeEJaO0FEOEJJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUM1QlI7QUQ4QlE7RUFDSSxtQkFBQTtBQzVCWjtBRCtCUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDN0JaO0FEc0NBO0VBSVE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUN0Q047RUR5Q007SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUN2Q1Y7RUQwQ007SUFDSSxpQkFBQTtFQ3hDVjtFRDBDVTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7RUN4Q2Q7RUQyQ1U7SUFDSSxtQkFBQTtFQ3pDZDtFRDZDTTtJQUNJLGtCQUFBO0VDM0NWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNTFDM0Y7XHJcbiAgICAtLWJhY2tncm91bmQ6IzA1MUMzRjtcclxuICAgXHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICAgXHJcbiAgICAmLmxvZ2luLS1pb3N7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7IFxyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmxvZ2luX19tYWlue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDQwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxvZ2luX19tYWluX19sb2dve1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubG9naW5fX21haW5fX2lubmVye1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTAwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5sb2dpbl9fbWFpbl9fZm9ybXtcclxuICAgICAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY4RkI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0RFRTdFRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDozMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubG9naW5fX21haW5fX2Zvcm1fX2xvZ2luLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5sb2dpbl9fbWFpbl9fZm9ybV9fZm9yZ290LXBhc3N3b3Jke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubG9naW5fX21haW5fX2Zvcm1fX2Vycm9ye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9fc2Vjb25kYXJ5e1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNTBweCA0MHB4OyAgICBcclxuICAgICAgICBcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubG9naW5fX3NlY29uZGFyeV9fY3RhLWJ1dHRvbntcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA0ODBweCkge1xyXG4gICAgXHJcbiAgICAubG9naW57XHJcbiAgICBcclxuICAgICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxvZ2luX19tYWlue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5sb2dpbl9fbWFpbl9faW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubG9naW5fX21haW5fX2xvZ297XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5sb2dpbl9fc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiLmxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MUMzRjtcbiAgLS1iYWNrZ3JvdW5kOiMwNTFDM0Y7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubG9naW4ubG9naW4tLWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubG9naW4gLmxvZ2luX19tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCA0MHB4O1xufVxuLmxvZ2luIC5sb2dpbl9fbWFpbiAubG9naW5fX21haW5fX2xvZ28ge1xuICBtYXJnaW4tYm90dG9tOiA4NXB4O1xufVxuLmxvZ2luIC5sb2dpbl9fbWFpbiAubG9naW5fX21haW5fX2lubmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwMHB4IDBweDtcbn1cbi5sb2dpbiAubG9naW5fX21haW4gLmxvZ2luX19tYWluX19pbm5lciBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubG9naW4gLmxvZ2luX19tYWluIC5sb2dpbl9fbWFpbl9faW5uZXIgLmxvZ2luX19tYWluX19mb3JtIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogd2hpdGU7XG59XG4ubG9naW4gLmxvZ2luX19tYWluIC5sb2dpbl9fbWFpbl9faW5uZXIgLmxvZ2luX19tYWluX19mb3JtIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY4RkI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0RFRTdFRTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xufVxuLmxvZ2luIC5sb2dpbl9fbWFpbiAubG9naW5fX21haW5fX2lubmVyIC5sb2dpbl9fbWFpbl9fZm9ybSBpb24taXRlbSAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubG9naW4gLmxvZ2luX19tYWluIC5sb2dpbl9fbWFpbl9faW5uZXIgLmxvZ2luX19tYWluX19mb3JtIC5sb2dpbl9fbWFpbl9fZm9ybV9fbG9naW4tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5sb2dpbiAubG9naW5fX21haW4gLmxvZ2luX19tYWluX19pbm5lciAubG9naW5fX21haW5fX2Zvcm0gLmxvZ2luX19tYWluX19mb3JtX19sb2dpbi1idXR0b24gaW9uLXNwaW5uZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sb2dpbiAubG9naW5fX21haW4gLmxvZ2luX19tYWluX19mb3JtX19mb3Jnb3QtcGFzc3dvcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubG9naW4gLmxvZ2luX19tYWluIC5sb2dpbl9fbWFpbl9fZm9ybV9fZXJyb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG4ubG9naW4gLmxvZ2luX19zZWNvbmRhcnkge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDUwcHggNDBweDtcbn1cbi5sb2dpbiAubG9naW5fX3NlY29uZGFyeSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubG9naW4gLmxvZ2luX19zZWNvbmRhcnkgLmxvZ2luX19zZWNvbmRhcnlfX2N0YS1idXR0b24ge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxvZ2luIGgxIHtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmxvZ2luIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbiAgLmxvZ2luIC5sb2dpbl9fbWFpbiB7XG4gICAgcGFkZGluZzogMHB4IDMwcHg7XG4gIH1cbiAgLmxvZ2luIC5sb2dpbl9fbWFpbiAubG9naW5fX21haW5fX2lubmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgfVxuICAubG9naW4gLmxvZ2luX19tYWluIC5sb2dpbl9fbWFpbl9fbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcbiAgfVxuICAubG9naW4gLmxvZ2luX19zZWNvbmRhcnkge1xuICAgIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(authService, iab, platform) {
        this.authService = authService;
        this.iab = iab;
        this.platform = platform;
        this.user = { username: "", password: "", error: "", loading: false };
        this.isIos = true; //this.platform.is('ios');
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        this.authService.login(this.user).then(function (token) {
            _this.user.username = "";
            _this.user.password = "";
            _this.user.loading = false;
        }).catch(function (e) {
            console.log(e);
            _this.user.loading = false;
            if (e && (e.status === 401 || e.status === 403)) {
                _this.user.error = "Incorrect email or password";
            }
            else if (e && e.status === 422) {
                for (var index in e.error.parameterErrors) {
                    var error = e.error.parameterErrors[index];
                    _this.user.error = _this.user.error + error + " ";
                }
            }
            else if (e && e.status === 0) {
                _this.user.error = "Your are offline. Connect to the internet and try again.";
            }
            else if (e && (e.status === 500 || e.status === 404)) {
                _this.user.error = "There was an error on the server. If problems persist, contact us at info@datanow.co.nz.";
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    LoginPage.prototype.signup = function () {
        //this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.openLink = function (link) {
        this.iab.create(link, '_blank', { location: "yes" });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map