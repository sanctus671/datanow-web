(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datapoint-datapoint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/datapoint/datapoint.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/datapoint/datapoint.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"datapoint-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/datapoints\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>{{datapoint.timeSeriesName ? datapoint.timeSeriesName : \"Loading...\"}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"datapoint\">\n    \n    \n    <div class=\"datapoint__datapoint-container\">\n        \n        <div class=\"datapoint__datapoint-container__header\">\n            \n            <div class=\"datapoint__datapoint-container__header__count\">\n                <h1>{{datapoint.value}}</h1>\n                <p>+{{getIncreaseToday()}} increase today</p>\n            </div>\n            \n            <ion-button color=\"primary\" fill=\"clear\" size=\"large\" class=\"datapoint__datapoint-container__header__action\" (click)=\"add()\">\n                <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>              \n            \n        </div>\n        \n        \n        <div class=\"datapoint__datapoint-container__graph\">\n            <div [chart]=\"chart\"></div>\n        </div>      \n        \n    </div>\n    \n\n    \n    \n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/datapoint/datapoint-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/datapoint/datapoint-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DatapointPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatapointPageRoutingModule", function() { return DatapointPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datapoint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datapoint.page */ "./src/app/pages/datapoint/datapoint.page.ts");




var routes = [
    {
        path: '',
        component: _datapoint_page__WEBPACK_IMPORTED_MODULE_3__["DatapointPage"]
    }
];
var DatapointPageRoutingModule = /** @class */ (function () {
    function DatapointPageRoutingModule() {
    }
    DatapointPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DatapointPageRoutingModule);
    return DatapointPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/datapoint/datapoint.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/datapoint/datapoint.module.ts ***!
  \*****************************************************/
/*! exports provided: DatapointPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatapointPageModule", function() { return DatapointPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _datapoint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datapoint-routing.module */ "./src/app/pages/datapoint/datapoint-routing.module.ts");
/* harmony import */ var _datapoint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datapoint.page */ "./src/app/pages/datapoint/datapoint.page.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");








var DatapointPageModule = /** @class */ (function () {
    function DatapointPageModule() {
    }
    DatapointPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_7__["ChartModule"],
                _datapoint_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatapointPageRoutingModule"]
            ],
            declarations: [_datapoint_page__WEBPACK_IMPORTED_MODULE_6__["DatapointPage"]]
        })
    ], DatapointPageModule);
    return DatapointPageModule;
}());



/***/ }),

/***/ "./src/app/pages/datapoint/datapoint.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/datapoint/datapoint.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datapoint-header ion-title {\n  font-family: \"Neatrif Studio\", sans-serif !important;\n  font-size: 24px;\n  line-height: 56px;\n  color: #33395D;\n}\n.datapoint-header ion-back-button {\n  font-family: \"NB International\", sans-serif !important;\n}\n.datapoint .datapoint__datapoint-container {\n  border: 1px solid #EAECEE;\n  border-radius: 6px;\n  margin: 40px 30px;\n  padding: 30px 40px;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 40px;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header .datapoint__datapoint-container__header__count {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header .datapoint__datapoint-container__header__count h1 {\n  font-size: 72px;\n  line-height: 72px;\n  color: #33395D;\n  margin: 0px;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header .datapoint__datapoint-container__header__count p {\n  color: #2DCA73;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 16px;\n  margin: 0px;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header .datapoint__datapoint-container__header__action ion-icon {\n  width: 50px;\n  height: 50px;\n  color: #B8C7D4;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__graph {\n  width: 100%;\n}\n.datapoint .datapoint__datapoint-container h2 {\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 22px;\n  color: #33395D;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__form ion-item {\n  --border-color: transparent;\n  margin-bottom: 10px;\n  --background-focused: white;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__form ion-item ion-input, .datapoint .datapoint__datapoint-container .datapoint__datapoint-container__form ion-item ion-datetime {\n  background-color: #F4F8FB;\n  font-size: 16px;\n  border: 2px solid #DEE7EE;\n  box-sizing: border-box;\n  border-radius: 3px;\n  line-height: 31px;\n  --padding-start: 15px;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__form ion-item .label-stacked.sc-ion-label-md-h {\n  margin-bottom: 10px;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__form .datapoint__datapoint-container__form__row ion-item {\n  width: 50%;\n  display: inline-block;\n  --background-focused: white;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__form .datapoint__datapoint-container__form__save-button {\n  margin-top: 25px;\n}\n.datapoint .datapoint__datapoint-container .datapoint__datapoint-container__form .datapoint__datapoint-container__form__save-button ion-spinner {\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n@media screen and (max-width: 480px) {\n  .datapoint-header ion-title {\n    font-size: 20px;\n  }\n\n  .datapoint .datapoint__datapoint-container {\n    margin: 30px 30px;\n    padding: 15px 20px;\n  }\n  .datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header .datapoint__datapoint-container__header__count h1 {\n    font-size: 48px;\n    line-height: 48px;\n  }\n  .datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header .datapoint__datapoint-container__header__count p {\n    font-size: 15px;\n    line-height: 25px;\n  }\n  .datapoint .datapoint__datapoint-container .datapoint__datapoint-container__header .datapoint__datapoint-container__header__action ion-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .datapoint .datapoint__datapoint-container .datapoint__datapoint-container__graph {\n    display: block;\n    width: 100%;\n    position: relative;\n  }\n  .datapoint .datapoint__datapoint-container h2 {\n    font-weight: bold;\n    font-size: 22px;\n    line-height: 22px;\n    color: #33395D;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YXBvaW50L0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXGRhdGFub3cvc3JjXFxhcHBcXHBhZ2VzXFxkYXRhcG9pbnRcXGRhdGFwb2ludC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGFwb2ludC9kYXRhcG9pbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0RBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQVI7QURHSTtFQUNJLHNEQUFBO0FDRFI7QURTSTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUFI7QURVUTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ1RaO0FEV1k7RUFDSSxtQkFBQTtVQUFBLE9BQUE7QUNUaEI7QURXZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1RwQjtBRFlnQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNWcEI7QURlZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNicEI7QURxQlE7RUFDSSxXQUFBO0FDbkJaO0FEd0JRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDdEJaO0FENEJnQjtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQzFCcEI7QUQ2Qm9CO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQzNCeEI7QURpQ29CO0VBQ0ksbUJBQUE7QUMvQnhCO0FEb0NnQjtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDbENwQjtBRHNDZ0I7RUFDSSxnQkFBQTtBQ3BDcEI7QURzQ29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3BDeEI7QURpREE7RUFDSTtJQUNJLGVBQUE7RUM5Q047O0VEb0RNO0lBRUksaUJBQUE7SUFDQSxrQkFBQTtFQ2xEVjtFRHlEa0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUN2RHRCO0VEMERrQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ3hEdEI7RUQ2RGtCO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUMzRHRCO0VEbUVVO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ2pFZDtFRHVFVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQ3JFZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0YXBvaW50L2RhdGFwb2ludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXBvaW50LWhlYWRlcntcclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBmb250LWZhbWlseTogJ05lYXRyaWYgU3R1ZGlvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50OyBcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzM5NUQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgICAgICBmb250LWZhbWlseTogJ05CIEludGVybmF0aW9uYWwnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmRhdGFwb2ludHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVye1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQUVDRUU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OyAgIFxyXG4gICAgICAgIG1hcmdpbjogNDBweCAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNDBweDsgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9faGVhZGVye1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9faGVhZGVyX19jb3VudHtcclxuICAgICAgICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzOTVEO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyRENBNzM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2hlYWRlcl9fYWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojQjhDN0Q0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9fZ3JhcGh7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM5NUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2Zvcm17XHJcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWlucHV0LCBpb24tZGF0ZXRpbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY4RkI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0RFRTdFRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDozMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19mb3JtX19yb3cgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19mb3JtX19zYXZlLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KSB7XHJcbiAgICAuZGF0YXBvaW50LWhlYWRlciBpb24tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGF0YXBvaW50e1xyXG5cclxuXHJcbiAgICAgICAgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcntcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7ICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2hlYWRlcntcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9faGVhZGVyX19jb3VudHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXJfX2FjdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2dyYXBoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM5NUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0iLCIuZGF0YXBvaW50LWhlYWRlciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJOZWF0cmlmIFN0dWRpb1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGNvbG9yOiAjMzMzOTVEO1xufVxuLmRhdGFwb2ludC1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiTkIgSW50ZXJuYXRpb25hbFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQUVDRUU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiA0MHB4IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2hlYWRlciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXJfX2NvdW50IHtcbiAgZmxleDogMTtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXIgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9faGVhZGVyX19jb3VudCBoMSB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgbGluZS1oZWlnaHQ6IDcycHg7XG4gIGNvbG9yOiAjMzMzOTVEO1xuICBtYXJnaW46IDBweDtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXIgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9faGVhZGVyX19jb3VudCBwIHtcbiAgY29sb3I6ICMyRENBNzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXIgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9faGVhZGVyX19hY3Rpb24gaW9uLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogI0I4QzdENDtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19ncmFwaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMzMzOTVEO1xufVxuLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2Zvcm0gaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB3aGl0ZTtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19mb3JtIGlvbi1pdGVtIGlvbi1pbnB1dCwgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2Zvcm0gaW9uLWl0ZW0gaW9uLWRhdGV0aW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjhGQjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjREVFN0VFO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG59XG4uZGF0YXBvaW50IC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXIgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9fZm9ybSBpb24taXRlbSAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZGF0YXBvaW50IC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXIgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9fZm9ybSAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19mb3JtX19yb3cgaW9uLWl0ZW0ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB3aGl0ZTtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19mb3JtIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2Zvcm1fX3NhdmUtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19mb3JtIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2Zvcm1fX3NhdmUtYnV0dG9uIGlvbi1zcGlubmVyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5kYXRhcG9pbnQtaGVhZGVyIGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggMzBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIH1cbiAgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2hlYWRlciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXJfX2NvdW50IGgxIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIH1cbiAgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2hlYWRlciAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyX19oZWFkZXJfX2NvdW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgfVxuICAuZGF0YXBvaW50IC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXIgLmRhdGFwb2ludF9fZGF0YXBvaW50LWNvbnRhaW5lcl9faGVhZGVyIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2hlYWRlcl9fYWN0aW9uIGlvbi1pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIC5kYXRhcG9pbnRfX2RhdGFwb2ludC1jb250YWluZXJfX2dyYXBoIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kYXRhcG9pbnQtY29udGFpbmVyIGgyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICMzMzM5NUQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/datapoint/datapoint.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/datapoint/datapoint.page.ts ***!
  \***************************************************/
/*! exports provided: DatapointPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatapointPage", function() { return DatapointPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_datapoints_datapoints_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/datapoints/datapoints.service */ "./src/app/services/datapoints/datapoints.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");








var DatapointPage = /** @class */ (function () {
    function DatapointPage(route, datapointsService, toastController, authenticationService, router) {
        var _this = this;
        this.route = route;
        this.datapointsService = datapointsService;
        this.toastController = toastController;
        this.authenticationService = authenticationService;
        this.router = router;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"]({
            chart: {
                type: 'line',
                reflow: true,
                height: 200,
                marginLeft: 40
            },
            title: {
                text: undefined
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            legend: {
                enabled: false
            },
            series: []
        });
        var datapointId = this.route.snapshot.params['id'];
        this.datapoint = { timeSeriesId: datapointId, value: 0 };
        this.value = {};
        this.values = [];
        this.getDatapoint();
        this.inCooldown = false;
        setTimeout(function () {
            _this.getDatapointValues();
        }, 300000);
    }
    DatapointPage.prototype.ngOnInit = function () {
    };
    DatapointPage.prototype.getDatapoint = function () {
        var _this = this;
        this.datapointsService.getDatapoint(this.datapoint.timeSeriesId).then(function (data) {
            _this.datapoint.timeSeriesName = data.timeSeriesName;
            _this.getDatapointValues();
        }).catch(function () {
            _this.datapointsError();
        });
    };
    DatapointPage.prototype.datapointsError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Error retreiving data',
                            duration: 4000,
                            color: 'danger',
                            mode: 'md',
                            buttons: []
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatapointPage.prototype.add = function () {
        var _this = this;
        if (this.inCooldown) {
            this.inCooldownError();
            return;
        }
        this.inCooldown = true;
        setTimeout(function () {
            _this.inCooldown = false;
        }, 1000);
        var timeout = setTimeout(function () {
            _this.datapointsService.addValue(_this.datapoint, { value: 1 }).then(function (data) {
                //this.getDatapointValues();
                _this.datapointsService.datapointsChanged(_this.datapoint.timeSeriesId);
            }).catch(function (e) {
                if (e.status === 401) {
                    _this.refreshTokenAdd();
                }
                else {
                    _this.datapoint.value -= 1;
                    _this.getDatapointValues();
                    _this.valueAddedError();
                }
            });
        }, 10000);
        this.datapoint.value += 1;
        this.datapoint.last_added = new Date();
        this.values.push({ value: this.datapoint.value, date: this.datapoint.last_added });
        this.valueAdded(timeout);
        this.setGraph();
    };
    DatapointPage.prototype.refreshTokenAdd = function () {
        var _this = this;
        this.authenticationService.refreshToken().then(function () {
            _this.datapointsService.addValue(_this.datapoint, { value: 1 }).then(function (data) {
                //datapoint.value += 1;
                //datapoint.last_added = new Date();
                //this.valueAdded(datapoint);
            }).catch(function () {
                _this.valueAddedError();
                _this.datapoint.value -= 1;
                _this.getDatapointValues();
            });
        }).catch(function () {
            _this.valueAddedError();
            _this.router.navigate(['login']);
        });
    };
    DatapointPage.prototype.valueAdded = function (timeout) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Changes Saved',
                            duration: 10000,
                            color: 'dark',
                            mode: 'md',
                            buttons: [
                                {
                                    side: 'end',
                                    text: 'Undo',
                                    handler: function () {
                                        clearTimeout(timeout);
                                        _this.datapoint.value -= 1;
                                        _this.getDatapointValues();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatapointPage.prototype.valueAddedError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Error adding value. Try again soon.',
                            duration: 2000,
                            color: 'danger',
                            mode: 'md',
                            buttons: []
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatapointPage.prototype.inCooldownError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Wait 1 second to add value again',
                            duration: 1000,
                            color: 'warning',
                            mode: 'md',
                            buttons: []
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatapointPage.prototype.setAmount = function () {
        var _this = this;
        this.datapoint.value += this.value.value;
        this.value.loading = true;
        this.datapointsService.addValue(this.datapoint, { value: this.value.value }).then(function (data) {
            _this.datapoint.last_added = new Date();
            _this.datapoint.value = data.value;
            _this.values.push({ value: data.value, date: new Date() });
            _this.value.value = "";
            _this.value.date = "";
            _this.value.time = "";
            _this.value.loading = false;
            _this.getDatapointValues();
            _this.datapointsService.datapointsChanged(_this.datapoint.timeSeriesId);
            //this.valueAdded();
        }).catch(function () {
            _this.value.loading = false;
        });
    };
    DatapointPage.prototype.getDatapointValues = function () {
        var _this = this;
        this.datapointsService.getValues(this.datapoint).then(function (data) {
            _this.values = data;
            if (data && data.length > 0) {
                _this.datapoint.last_added = data[data.length - 1].date;
                var value = 0;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var valueEntry = data_1[_i];
                    value += 1 /*valueEntry.value */;
                }
                _this.datapoint.value = value;
                _this.setGraph();
            }
            else {
                _this.datapoint.value = 0;
            }
        });
    };
    DatapointPage.prototype.setGraph = function () {
        var series = [];
        var valueTotal = 1;
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var value = _a[_i];
            series.push([new Date(value.date).getTime(), valueTotal]);
            valueTotal += 1;
        }
        this.chart.removeSeries(0);
        this.chart.addSeries({
            name: 'Value',
            color: "#FF015B",
            data: series,
            type: undefined
        }, true, true);
        this.chart.ref.reflow();
    };
    DatapointPage.prototype.getIncreaseToday = function () {
        var today = moment__WEBPACK_IMPORTED_MODULE_3__();
        var total = 0;
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var value = _a[_i];
            if (moment__WEBPACK_IMPORTED_MODULE_3__(value.date).isSame(today, "day")) {
                total += 1;
            }
        }
        return total;
    };
    DatapointPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_datapoints_datapoints_service__WEBPACK_IMPORTED_MODULE_6__["DatapointsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DatapointPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datapoint',
            template: __webpack_require__(/*! raw-loader!./datapoint.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/datapoint/datapoint.page.html"),
            styles: [__webpack_require__(/*! ./datapoint.page.scss */ "./src/app/pages/datapoint/datapoint.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_datapoints_datapoints_service__WEBPACK_IMPORTED_MODULE_6__["DatapointsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DatapointPage);
    return DatapointPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-datapoint-datapoint-module.js.map