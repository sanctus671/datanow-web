(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datapoints-datapoints-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/datapoints/datapoints.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/datapoints/datapoints.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"datapoints-toolbar\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" *ngIf=\"!isIos\">\r\n            <ion-menu-button color=\"dark\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <img class=\"datapoints-toolbar__logo\" src=\"assets/logo.svg\"/>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button color=\"dark\" class=\"datapoints-toolbar__user-login\" (click)=\"accountPopover($event)\">\r\n                <ion-icon name=\"contact\" ios=\"md-contact\" md=\"md-contact\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>        \r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"datapoints\">\r\n    \r\n    \r\n    <div class=\"datapoints__header\">\r\n        <h1>\r\n            Manual Data\r\n        </h1>\r\n        \r\n        <div class=\"datapoints__header__actions\" *ngIf=\"!properties.loading && datapoints.length > 0\">\r\n            <ion-button color=\"dark\" fill=\"clear\" size=\"large\" no-padding \r\n                        class=\"datapoints__header__actions__action datapoints__header__actions__action--grid\"\r\n                        (click)=\"changeDisplayType()\">\r\n                <ion-icon src=\"assets/grid.svg\" *ngIf=\"properties.displayType === 'list'\"></ion-icon>\r\n                <ion-icon src=\"assets/list.svg\" *ngIf=\"properties.displayType === 'grid'\"></ion-icon>\r\n            </ion-button>     \r\n            <ion-button color=\"dark\" fill=\"clear\" size=\"large\" no-padding class=\"datapoints__header__actions__action\" (click)=\"dataPointsPopover($event)\">\r\n                <ion-icon name=\"more\" ios=\"md-more\" md=\"md-more\"></ion-icon>\r\n            </ion-button>                \r\n        </div>\r\n        \r\n        \r\n    </div>\r\n    \r\n    \r\n    <div class=\"datapoints__loading\" *ngIf=\"properties.loading\">\r\n        <ion-spinner color=\"dark\" name=\"circular\"></ion-spinner>\r\n    </div>     \r\n    \r\n    \r\n    <div class=\"datapoints__empty\" *ngIf=\"!properties.loading && datapoints.length < 1 && !isForbidden\">\r\n         <h2>Can't load data</h2>\r\n        <a (click)=\"properties.loading = true; getDatapoints()\">Try again</a>\r\n    </div>      \r\n\r\n\r\n    <div class=\"datapoints__empty\" *ngIf=\"!properties.loading && datapoints.length < 1 && isForbidden\">\r\n        <h2>Invalid permissions</h2>\r\n        <p>Contact us if you wish to be set up to use this app</p>\r\n        <a (click)=\"openLink('https://www.datanow.co.nz/contact/')\">Contact DataNow</a>\r\n    </div> \r\n\r\n    \r\n    \r\n    <ion-list class=\"datapoints__datapoints-list\" *ngIf=\"properties.displayType === 'list'\">\r\n        \r\n        <div *ngFor=\"let datapoint of datapoints\">\r\n            <ion-item class=\"datapoints__datapoints-list__datapoint datapoint\" no-padding *ngIf=\"hiddenDatapointIds.indexOf(datapoint.timeSeriesId) < 0 || properties.toggleHide\" \r\n                      [ngClass]=\"{'datapoint--disabled' : hiddenDatapointIds.indexOf(datapoint.timeSeriesId) > -1, 'datapoint--toggle-hide' : properties.toggleHide}\">\r\n\r\n                <ion-button slot=\"start\" color=\"primary\" fill=\"clear\" size=\"large\" class=\"datapoint__count__action\" *ngIf=\"properties.toggleHide\" (click)=\"toggleDatapoint(datapoint)\">\r\n                    <ion-icon [name]=\"hiddenDatapointIds.indexOf(datapoint.timeSeriesId) > -1 ? 'md-eye-off' : 'md-eye'\" ></ion-icon>\r\n                </ion-button>             \r\n\r\n                <ion-label class=\"datapoint__details\" color=\"dark\" [routerLink]=\"['/datapoints/' + datapoint.timeSeriesId]\" routerDirection=\"forward\">\r\n                    <h2>{{datapoint.timeSeriesName}}</h2>\r\n                    <p>{{datapoint.last_added ? formatDate(datapoint.last_added) : \"\"}}</p>\r\n                </ion-label>\r\n                <div class=\"datapoint__count\" slot=\"end\">\r\n                    <h2>{{datapoint.value}}</h2>\r\n                    <ion-button color=\"primary\" fill=\"clear\" size=\"large\" class=\"datapoints__header__actions__action\" (click)=\"add(datapoint)\" *ngIf=\"!properties.toggleHide\">\r\n                        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n                    </ion-button>                \r\n                </div>        \r\n            </ion-item>   \r\n        </div>\r\n\r\n        \r\n        <div class=\"datapoints__datapoints-list__showhide-actions\" *ngIf=\"properties.toggleHide\">\r\n            \r\n            <ion-button color=\"light\" class=\"datapoints__datapoints-list__showhide-actions__cancel-button\" (click)=\"cancelHiddenDatapoints()\">\r\n                Cancel\r\n            </ion-button> \r\n\r\n            <ion-button color=\"primary\" class=\"datapoints__datapoints-list__showhide-actions__save-button\" (click)=\"saveHiddenDatapoints()\">\r\n                Save\r\n            </ion-button> \r\n            \r\n        </div>\r\n        \r\n    </ion-list>\r\n    \r\n    \r\n    \r\n    <ion-grid class=\"datapoints__datapoints-grid\" no-padding *ngIf=\"properties.displayType === 'grid'\">\r\n        \r\n        <ion-row>          \r\n                <ion-col size=\"6\" class=\"datapoints__datapoints-grid__datapoint datapoint\" *ngFor=\"let datapoint of datapoints\"\r\n                          [ngClass]=\"{'datapoint--hide' : hiddenDatapointIds.indexOf(datapoint.timeSeriesId) > -1}\">\r\n                    <div class=\"datapoint__add-box\" (click)=\"add(datapoint)\">+1</div>\r\n\r\n                    <a [routerLink]=\"['/datapoints/' + datapoint.timeSeriesId]\" routerDirection=\"forward\">\r\n                        <h1>{{datapoint.value}}</h1> \r\n                        <h2>{{datapoint.timeSeriesName}}</h2>\r\n                        <p>{{datapoint.last_added ? formatDate(datapoint.last_added) : \"\"}}</p>\r\n                    </a>\r\n\r\n                </ion-col>\r\n\r\n            \r\n            \r\n        </ion-row>\r\n        \r\n        \r\n        \r\n    </ion-grid>\r\n\r\n    \r\n \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/datapoints/datapoints.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/datapoints/datapoints.module.ts ***!
  \*******************************************************/
/*! exports provided: DatapointsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatapointsPageModule", function() { return DatapointsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datapoints_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datapoints.page */ "./src/app/pages/datapoints/datapoints.page.ts");







var DatapointsPageModule = /** @class */ (function () {
    function DatapointsPageModule() {
    }
    DatapointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _datapoints_page__WEBPACK_IMPORTED_MODULE_6__["DatapointsPage"]
                    }
                ])
            ],
            declarations: [_datapoints_page__WEBPACK_IMPORTED_MODULE_6__["DatapointsPage"]]
        })
    ], DatapointsPageModule);
    return DatapointsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/datapoints/datapoints.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/datapoints/datapoints.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.datapoints-toolbar .datapoints-toolbar__logo {\n  height: 20px;\n}\n.datapoints-toolbar .datapoints-toolbar__user-login:after {\n  content: \"▾\";\n  color: #8EA3B5;\n  position: absolute;\n  right: -3px;\n  top: 0px;\n  line-height: 52px;\n}\n.datapoints__header {\n  padding: 50px 40px 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 134px;\n}\n.datapoints__header h1 {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 0px;\n}\n.datapoints__header .datapoints__header__actions ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #B8C7D4;\n}\n.datapoints__header .datapoints__header__actions .datapoints__header__actions__action--grid {\n  padding: 0px 20px;\n}\n.datapoints__header .datapoints__header__actions .datapoints__header__actions__action--grid ion-icon {\n  width: 26px;\n  height: 26px;\n}\n.datapoints__loading {\n  text-align: center;\n  padding: 80px 0px;\n}\n.datapoints__loading ion-spinner {\n  width: 50px;\n  height: 50px;\n}\n.datapoints__empty {\n  text-align: center;\n  padding: 50px 20px;\n}\n.datapoints__empty h2 {\n  color: #B8C7D4;\n}\n.datapoints__empty p {\n  color: #B8C7D4;\n  margin-top: 0px;\n}\n.datapoints__datapoints-list .datapoint {\n  --border-color: #EAECEE;\n  padding-left: 40px;\n  padding-right: 0px;\n}\n.datapoints__datapoints-list .datapoint.datapoint--disabled {\n  opacity: 0.4;\n}\n.datapoints__datapoints-list .datapoint.datapoint--disabled ion-icon {\n  color: #33395D;\n}\n.datapoints__datapoints-list .datapoint.datapoint--toggle-hide {\n  padding-left: 0px;\n  padding-right: 30px;\n}\n.datapoints__datapoints-list .datapoint .datapoint__details {\n  margin: 20px 0px;\n  cursor: pointer;\n}\n.datapoints__datapoints-list .datapoint .datapoint__details:focus {\n  outline: none;\n}\n.datapoints__datapoints-list .datapoint .datapoint__details:active {\n  opacity: 0.4;\n}\n.datapoints__datapoints-list .datapoint .datapoint__details h2 {\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 26px;\n  margin: 0px;\n  color: #33395D;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.datapoints__datapoints-list .datapoint .datapoint__details p {\n  font-size: 16px;\n  line-height: 26px;\n  color: #8EA3B5;\n}\n.datapoints__datapoints-list .datapoint .datapoint__count {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.datapoints__datapoints-list .datapoint .datapoint__count h2 {\n  color: #33395D;\n  font-size: 28px;\n  line-height: 28px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 0px;\n}\n.datapoints__datapoints-list .datapoint .datapoint__count ion-icon {\n  width: 38px;\n  height: 38px;\n}\n.datapoints__datapoints-list .datapoints__datapoints-list__showhide-actions {\n  display: -webkit-box;\n  display: flex;\n  padding: 40px 20px;\n}\n.datapoints__datapoints-list .datapoints__datapoints-list__showhide-actions ion-button {\n  margin: 0px 10px;\n}\n.datapoints__datapoints-list .datapoints__datapoints-list__showhide-actions .datapoints__datapoints-list__showhide-actions__cancel-button {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.datapoints__datapoints-list .datapoints__datapoints-list__showhide-actions .datapoints__datapoints-list__showhide-actions__save-button {\n  width: 60%;\n}\n.datapoints__datapoints-grid {\n  border-top: 1px solid #EAECEE;\n}\n.datapoints__datapoints-grid .datapoint {\n  border-bottom: 1px solid #EAECEE;\n  position: relative;\n  text-align: center;\n  color: #33395D;\n  padding: 40px 0px;\n}\n.datapoints__datapoints-grid .datapoint:nth-child(n+1):after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  width: 1px;\n  background-color: #EAECEE;\n}\n.datapoints__datapoints-grid .datapoint.datapoint--hide {\n  display: none;\n}\n.datapoints__datapoints-grid .datapoint .datapoint__add-box {\n  color: #008DFF;\n  font-size: 49px;\n  line-height: 49px;\n  font-weight: bold;\n  border: 4px solid #008DFF;\n  border-radius: 12px;\n  display: inline-block;\n  margin: 0 auto;\n  padding: 10px 25px 15px;\n  -webkit-transition: opacity 100ms;\n  transition: opacity 100ms;\n}\n.datapoints__datapoints-grid .datapoint .datapoint__add-box:active {\n  opacity: 0.4;\n}\n.datapoints__datapoints-grid .datapoint h1 {\n  color: #33395D;\n  margin: 15px 0px;\n}\n.datapoints__datapoints-grid .datapoint h2 {\n  color: #33395D;\n  margin: 0px;\n  margin-bottom: 5px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 26px;\n}\n.datapoints__datapoints-grid .datapoint p {\n  color: #8EA3B5;\n  margin: 0px;\n  font-size: 16px;\n  line-height: 18px;\n}\n@media screen and (max-width: 480px) {\n  .datapoints__header {\n    padding: 20px 30px 10px;\n    height: 94px;\n  }\n\n  .datapoints__datapoints-list .datapoint {\n    padding-left: 30px;\n    padding-right: 0px;\n  }\n  .datapoints__datapoints-list .datapoint.datapoint--toggle-hide {\n    padding-left: 0px;\n    padding-right: 20px;\n  }\n  .datapoints__datapoints-list .datapoint .datapoint__details h2 {\n    font-size: 16px;\n    line-height: 18px;\n  }\n  .datapoints__datapoints-list .datapoint .datapoint__details p {\n    font-size: 13px;\n    line-height: 23px;\n  }\n  .datapoints__datapoints-list .datapoint .datapoint__count h2 {\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  .datapoints__datapoints-grid .datapoint {\n    padding: 15px 0px;\n  }\n  .datapoints__datapoints-grid .datapoint .datapoint__add-box {\n    font-size: 30px;\n    line-height: 30px;\n    padding: 10px 20px 15px;\n  }\n  .datapoints__datapoints-grid .datapoint h1 {\n    font-size: 27px;\n    line-height: 32px;\n    margin: 5px 0px;\n    margin-bottom: 0px;\n  }\n  .datapoints__datapoints-grid .datapoint h2 {\n    font-size: 14px;\n    line-height: 18px;\n    margin-bottom: 2px;\n  }\n  .datapoints__datapoints-grid .datapoint p {\n    color: #8EA3B5;\n    margin: 0px;\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YXBvaW50cy9kYXRhcG9pbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGF0YXBvaW50cy9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxkYXRhbm93L3NyY1xcYXBwXFxwYWdlc1xcZGF0YXBvaW50c1xcZGF0YXBvaW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRVo7RUFDSSxZQUFBO0FEQVI7QUNHSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FERFI7QUNRQTtFQUVJLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNJLGFBQUE7QUROUjtBQ1FJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtBRE5SO0FDVVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURSWjtBQ1lRO0VBRUksaUJBQUE7QURYWjtBQ2FZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURYaEI7QUNxQkE7RUFDSSxrQkFBQTtFQUNJLGlCQUFBO0FEbEJSO0FDbUJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURqQlI7QUNzQkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FEbkJKO0FDb0JJO0VBQ0ksY0FBQTtBRGxCUjtBQ29CSTtFQUNJLGNBQUE7RUFDSSxlQUFBO0FEbEJaO0FDeUJJO0VBQ0ksdUJBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FEdkJSO0FDeUJRO0VBQ0ksWUFBQTtBRHZCWjtBQ3lCWTtFQUNJLGNBQUE7QUR2QmhCO0FDMkJRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBRHpCWjtBQzRCUTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtBRDNCWjtBQzZCWTtFQUNJLGFBQUE7QUQzQmhCO0FDOEJZO0VBQ0ksWUFBQTtBRDVCaEI7QUMrQlk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBRDdCaEI7QUNnQ1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEOUJoQjtBQ29DUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURsQ1o7QUNtQ1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtBRGpDaEI7QUNvQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRGxDaEI7QUN5Q0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtBRHZDUjtBQ3lDUTtFQUNJLGdCQUFBO0FEdkNaO0FDMENRO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FEeENaO0FDMkNRO0VBQ0ksVUFBQTtBRHpDWjtBQ21EQTtFQUNJLDZCQUFBO0FEaERKO0FDbURJO0VBR0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEbkRSO0FDcURRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEbkRaO0FDdURRO0VBQ0ksYUFBQTtBRHJEWjtBQ3dEUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUR0RFo7QUN3RFk7RUFDSSxZQUFBO0FEdERoQjtBQzZEUTtFQUNJLGNBQUE7RUFDSSxnQkFBQTtBRDNEaEI7QUM4RFE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQ1RFo7QUMrRFE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRDdEWjtBQ3FFQTtFQUdJO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0VEcEVOOztFQ3lFTTtJQUVJLGtCQUFBO0lBQ0Esa0JBQUE7RUR2RVY7RUMwRVU7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VEeEVkO0VDK0VjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VEN0VsQjtFQ2dGYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRDlFbEI7RUNxRmM7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RURuRmxCOztFQzhGTTtJQUNJLGlCQUFBO0VEM0ZWO0VDNEZVO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7RUQxRmQ7RUM2RlU7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUQzRmQ7RUM4RlU7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDSSxrQkFBQTtFRDVGbEI7RUMrRlU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRDdGZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0YXBvaW50cy9kYXRhcG9pbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5kYXRhcG9pbnRzLXRvb2xiYXIgLmRhdGFwb2ludHMtdG9vbGJhcl9fbG9nbyB7XG4gIGhlaWdodDogMjBweDtcbn1cbi5kYXRhcG9pbnRzLXRvb2xiYXIgLmRhdGFwb2ludHMtdG9vbGJhcl9fdXNlci1sb2dpbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pa+XCI7XG4gIGNvbG9yOiAjOEVBM0I1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtM3B4O1xuICB0b3A6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG59XG5cbi5kYXRhcG9pbnRzX19oZWFkZXIge1xuICBwYWRkaW5nOiA1MHB4IDQwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMzRweDtcbn1cbi5kYXRhcG9pbnRzX19oZWFkZXIgaDEge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDBweDtcbn1cbi5kYXRhcG9pbnRzX19oZWFkZXIgLmRhdGFwb2ludHNfX2hlYWRlcl9fYWN0aW9ucyBpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjQjhDN0Q0O1xufVxuLmRhdGFwb2ludHNfX2hlYWRlciAuZGF0YXBvaW50c19faGVhZGVyX19hY3Rpb25zIC5kYXRhcG9pbnRzX19oZWFkZXJfX2FjdGlvbnNfX2FjdGlvbi0tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuLmRhdGFwb2ludHNfX2hlYWRlciAuZGF0YXBvaW50c19faGVhZGVyX19hY3Rpb25zIC5kYXRhcG9pbnRzX19oZWFkZXJfX2FjdGlvbnNfX2FjdGlvbi0tZ3JpZCBpb24taWNvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG59XG5cbi5kYXRhcG9pbnRzX19sb2FkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4MHB4IDBweDtcbn1cbi5kYXRhcG9pbnRzX19sb2FkaW5nIGlvbi1zcGlubmVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmRhdGFwb2ludHNfX2VtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDIwcHg7XG59XG4uZGF0YXBvaW50c19fZW1wdHkgaDIge1xuICBjb2xvcjogI0I4QzdENDtcbn1cbi5kYXRhcG9pbnRzX19lbXB0eSBwIHtcbiAgY29sb3I6ICNCOEM3RDQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50IHtcbiAgLS1ib3JkZXItY29sb3I6ICNFQUVDRUU7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50LmRhdGFwb2ludC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0IC5kYXRhcG9pbnQuZGF0YXBvaW50LS1kaXNhYmxlZCBpb24taWNvbiB7XG4gIGNvbG9yOiAjMzMzOTVEO1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50LmRhdGFwb2ludC0tdG9nZ2xlLWhpZGUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWxpc3QgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kZXRhaWxzIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50IC5kYXRhcG9pbnRfX2RldGFpbHM6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50IC5kYXRhcG9pbnRfX2RldGFpbHM6YWN0aXZlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50IC5kYXRhcG9pbnRfX2RldGFpbHMgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMzMzOTVEO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWxpc3QgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kZXRhaWxzIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBjb2xvcjogIzhFQTNCNTtcbn1cbi5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWxpc3QgLmRhdGFwb2ludCAuZGF0YXBvaW50X19jb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0IC5kYXRhcG9pbnQgLmRhdGFwb2ludF9fY291bnQgaDIge1xuICBjb2xvcjogIzMzMzk1RDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0IC5kYXRhcG9pbnQgLmRhdGFwb2ludF9fY291bnQgaW9uLWljb24ge1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0X19zaG93aGlkZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0X19zaG93aGlkZS1hY3Rpb25zIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0X19zaG93aGlkZS1hY3Rpb25zIC5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWxpc3RfX3Nob3doaWRlLWFjdGlvbnNfX2NhbmNlbC1idXR0b24ge1xuICBmbGV4OiAxO1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdCAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0X19zaG93aGlkZS1hY3Rpb25zIC5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWxpc3RfX3Nob3doaWRlLWFjdGlvbnNfX3NhdmUtYnV0dG9uIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtZ3JpZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQ0VFO1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtZ3JpZCAuZGF0YXBvaW50IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQUVDRUU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMzk1RDtcbiAgcGFkZGluZzogNDBweCAwcHg7XG59XG4uZGF0YXBvaW50c19fZGF0YXBvaW50cy1ncmlkIC5kYXRhcG9pbnQ6bnRoLWNoaWxkKG4rMSk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUVDRUU7XG59XG4uZGF0YXBvaW50c19fZGF0YXBvaW50cy1ncmlkIC5kYXRhcG9pbnQuZGF0YXBvaW50LS1oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWdyaWQgLmRhdGFwb2ludCAuZGF0YXBvaW50X19hZGQtYm94IHtcbiAgY29sb3I6ICMwMDhERkY7XG4gIGZvbnQtc2l6ZTogNDlweDtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDRweCBzb2xpZCAjMDA4REZGO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDI1cHggMTVweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcztcbn1cbi5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWdyaWQgLmRhdGFwb2ludCAuZGF0YXBvaW50X19hZGQtYm94OmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWdyaWQgLmRhdGFwb2ludCBoMSB7XG4gIGNvbG9yOiAjMzMzOTVEO1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtZ3JpZCAuZGF0YXBvaW50IGgyIHtcbiAgY29sb3I6ICMzMzM5NUQ7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtZ3JpZCAuZGF0YXBvaW50IHAge1xuICBjb2xvcjogIzhFQTNCNTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5kYXRhcG9pbnRzX19oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMzBweCAxMHB4O1xuICAgIGhlaWdodDogOTRweDtcbiAgfVxuXG4gIC5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWxpc3QgLmRhdGFwb2ludCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0IC5kYXRhcG9pbnQuZGF0YXBvaW50LS10b2dnbGUtaGlkZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0IC5kYXRhcG9pbnQgLmRhdGFwb2ludF9fZGV0YWlscyBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWxpc3QgLmRhdGFwb2ludCAuZGF0YXBvaW50X19kZXRhaWxzIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgfVxuICAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0IC5kYXRhcG9pbnQgLmRhdGFwb2ludF9fY291bnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIC5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWdyaWQgLmRhdGFwb2ludCB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH1cbiAgLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtZ3JpZCAuZGF0YXBvaW50IC5kYXRhcG9pbnRfX2FkZC1ib3gge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTVweDtcbiAgfVxuICAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1ncmlkIC5kYXRhcG9pbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWdyaWQgLmRhdGFwb2ludCBoMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuICAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1ncmlkIC5kYXRhcG9pbnQgcCB7XG4gICAgY29sb3I6ICM4RUEzQjU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG59IiwiLmRhdGFwb2ludHMtdG9vbGJhcntcblxuICAgIC5kYXRhcG9pbnRzLXRvb2xiYXJfX2xvZ297XG4gICAgICAgIGhlaWdodDoyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZGF0YXBvaW50cy10b29sYmFyX191c2VyLWxvZ2luOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIuKWvlwiO1xuICAgICAgICBjb2xvcjogIzhFQTNCNTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTNweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIH1cblxuXG59XG5cblxuLmRhdGFwb2ludHNfX2hlYWRlcntcbiAgICBcbiAgICBwYWRkaW5nOiA1MHB4IDQwcHggMjBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMzRweDtcbiAgICBcbiAgICBoMXtcbiAgICAgICAgZmxleDoxO1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgIH1cbiAgICBcbiAgICAuZGF0YXBvaW50c19faGVhZGVyX19hY3Rpb25ze1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIHdpZHRoOjMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgIGNvbG9yOiNCOEM3RDQ7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kYXRhcG9pbnRzX19oZWFkZXJfX2FjdGlvbnNfX2FjdGlvbi0tZ3JpZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICB3aWR0aDoyNnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDoyNnB4O1xuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxufVxuXG4uZGF0YXBvaW50c19fbG9hZGluZ3tcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogODBweCAwcHg7XG4gICAgaW9uLXNwaW5uZXJ7XG4gICAgICAgIHdpZHRoOjUwcHg7XG4gICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICBcbiAgICB9XG59XG5cbi5kYXRhcG9pbnRzX19lbXB0eXtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBwYWRkaW5nOjUwcHggMjBweDtcbiAgICBoMntcbiAgICAgICAgY29sb3I6ICNCOEM3RDQ7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiAjQjhDN0Q0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbn1cblxuXG4uZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0e1xuICAgIFxuICAgIC5kYXRhcG9pbnR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjRUFFQ0VFO1xuICAgICAgICBcbiAgICAgICAgcGFkZGluZy1sZWZ0OjQwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4OyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAmLmRhdGFwb2ludC0tZGlzYWJsZWR7XG4gICAgICAgICAgICBvcGFjaXR5OjAuNDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM5NUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuZGF0YXBvaW50LS10b2dnbGUtaGlkZXtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDowcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kYXRhcG9pbnRfX2RldGFpbHN7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6YWN0aXZle1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6MC40O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM5NUQ7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4OyAgICBcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhFQTNCNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kYXRhcG9pbnRfX2NvdW50e1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzOTVEO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjI4cHg7XG4gICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICB3aWR0aDozOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDozOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuZGF0YXBvaW50c19fZGF0YXBvaW50cy1saXN0X19zaG93aGlkZS1hY3Rpb25ze1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIHBhZGRpbmc6NDBweCAyMHB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbjowcHggMTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdF9fc2hvd2hpZGUtYWN0aW9uc19fY2FuY2VsLWJ1dHRvbntcbiAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdF9fc2hvd2hpZGUtYWN0aW9uc19fc2F2ZS1idXR0b257XG4gICAgICAgICAgICB3aWR0aDo2MCU7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG59XG5cblxuLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtZ3JpZHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUNFRTtcbiAgICBcbiAgICBcbiAgICAuZGF0YXBvaW50e1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFFQ0VFO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMzMzOTVEO1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgICAgICAgXG4gICAgICAgICY6bnRoLWNoaWxkKG4gKyAxKTphZnRlcntcbiAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgICAgIHJpZ2h0OjBweDtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgd2lkdGg6MXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRUFFQ0VFO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuZGF0YXBvaW50LS1oaWRle1xuICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGF0YXBvaW50X19hZGQtYm94e1xuICAgICAgICAgICAgY29sb3I6ICMwMDhERkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ5cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzAwOERGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweCAxNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICY6YWN0aXZle1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6MC40O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBoMXtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzOTVEO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMntcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzOTVEO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4OyAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6ICM4RUEzQjU7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4OyAgICAgICAgICAgIFxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KSB7XG5cblxuICAgIC5kYXRhcG9pbnRzX19oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzBweCAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDk0cHg7XG4gICAgfVxuXG4gICAgLmRhdGFwb2ludHNfX2RhdGFwb2ludHMtbGlzdHtcblxuICAgICAgICAuZGF0YXBvaW50e1xuXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4OyAgICAgICAgXG5cblxuICAgICAgICAgICAgJi5kYXRhcG9pbnQtLXRvZ2dsZS1oaWRle1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5kYXRhcG9pbnRfX2RldGFpbHN7XG5cblxuICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4OyAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDsgIFxuICAgICAgICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLmRhdGFwb2ludF9fY291bnR7XG4gICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICBcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC5kYXRhcG9pbnRzX19kYXRhcG9pbnRzLWdyaWR7XG5cbiAgICAgICAgLmRhdGFwb2ludHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgICAgICAgLmRhdGFwb2ludF9fYWRkLWJveHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDE1cHg7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDsgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhFQTNCNTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7ICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/datapoints/datapoints.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/datapoints/datapoints.page.ts ***!
  \*****************************************************/
/*! exports provided: DatapointsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatapointsPage", function() { return DatapointsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_account_popover_account_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/account-popover/account-popover.component */ "./src/app/components/account-popover/account-popover.component.ts");
/* harmony import */ var _components_datapoints_popover_datapoints_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/datapoints-popover/datapoints-popover.component */ "./src/app/components/datapoints-popover/datapoints-popover.component.ts");
/* harmony import */ var _services_datapoints_datapoints_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/datapoints/datapoints.service */ "./src/app/services/datapoints/datapoints.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");











var DatapointsPage = /** @class */ (function () {
    function DatapointsPage(popoverController, alertController, datapointsService, authenticationService, router, toastController, iab, platform) {
        var _this = this;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.datapointsService = datapointsService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.toastController = toastController;
        this.iab = iab;
        this.platform = platform;
        this.properties = { loading: true, toggleHide: false, displayType: "list" };
        this.isIos = this.platform.is('ios');
        this.datapoints = [];
        this.getDatapoints();
        this.hiddenDatapointIds = [];
        this.selectedHiddenDatapointIds = [];
        this.unselectedHiddenDatapointIds = [];
        this.getHiddenDatapointIds();
        this.datapointsService.monitorDatapoints().subscribe(function (value) {
            if (value) {
                _this.getDatapointValues();
            }
        });
        setTimeout(function () {
            _this.getDatapointValues();
        }, 300000);
        this.inCooldown = false;
        this.isForbidden = false;
    }
    DatapointsPage.prototype.add = function (datapoint) {
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
            _this.datapointsService.addValue(datapoint, { value: 1 }).then(function (data) {
            }).catch(function (e) {
                if (e.status === 401) {
                    _this.refreshTokenAdd(datapoint);
                }
                else {
                    datapoint.value -= 1;
                    _this.getDatapointValues();
                    _this.valueAddedError();
                }
            });
        }, 10000);
        datapoint.value += 1;
        datapoint.last_added = new Date();
        this.valueAdded(datapoint, timeout);
    };
    DatapointsPage.prototype.refreshTokenAdd = function (datapoint) {
        var _this = this;
        this.authenticationService.refreshToken().then(function () {
            _this.datapointsService.addValue(datapoint, { value: 1 }).then(function (data) {
                //datapoint.value += 1;
                //datapoint.last_added = new Date();
                //this.valueAdded(datapoint);
            }).catch(function () {
                datapoint.value -= 1;
                datapoint.value -= 1;
                _this.getDatapointValues();
            });
        }).catch(function () {
            _this.valueAddedError();
            _this.router.navigate(['login']);
        });
    };
    DatapointsPage.prototype.valueAdded = function (datapoint, timeout) {
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
                                        datapoint.value -= 1;
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
    DatapointsPage.prototype.valueAddedError = function () {
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
    DatapointsPage.prototype.inCooldownError = function () {
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
    DatapointsPage.prototype.getDatapoints = function () {
        var _this = this;
        this.isForbidden = false;
        this.datapointsService.getDatapoints().then(function (data) {
            _this.datapoints = data;
            _this.getDatapointValues();
            _this.properties.loading = false;
        }).catch(function (e) {
            if (e && e.status === 401) {
                _this.refreshToken();
            }
            else if (e && e.status === 403) {
                _this.properties.loading = false;
                _this.isForbidden = true;
            }
            else {
                _this.properties.loading = false;
                _this.datapointsError();
            }
        });
    };
    DatapointsPage.prototype.datapointsError = function () {
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
    DatapointsPage.prototype.getDatapointValues = function () {
        if (this.datapoints.length > 0) {
            var index = 0;
            this.setDatapointValueCallback(index);
        }
    };
    DatapointsPage.prototype.setDatapointValueCallback = function (index) {
        var _this = this;
        this.setDatapointValue(index).then(function () {
            index += 1;
            if (index <= (_this.datapoints.length - 1)) {
                _this.setDatapointValueCallback(index);
            }
        }).catch(function () {
        });
    };
    DatapointsPage.prototype.setDatapointValue = function (datapointIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.datapointsService.getValues(_this.datapoints[datapointIndex]).then(function (data) {
                if (data && data.length > 0) {
                    _this.datapoints[datapointIndex].last_added = data[data.length - 1].date;
                    var value = 0;
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var valueEntry = data_1[_i];
                        value += 1 /*valueEntry.value*/;
                    }
                    _this.datapoints[datapointIndex].value = value;
                }
                else {
                    _this.datapoints[datapointIndex].value = 0;
                }
                setTimeout(function () {
                    resolve(data);
                }, 100);
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    DatapointsPage.prototype.refreshToken = function () {
        var _this = this;
        this.authenticationService.refreshToken().then(function () {
            _this.datapointsService.getDatapoints().then(function (data) {
                _this.datapoints = data;
                _this.getDatapointValues();
                _this.properties.loading = false;
            });
        }).catch(function () {
            _this.router.navigate(['login']);
        });
    };
    DatapointsPage.prototype.toggleDatapoint = function (datapoint) {
        var index = this.hiddenDatapointIds.indexOf(datapoint.timeSeriesId);
        if (index > -1) {
            //show datapoint
            this.hiddenDatapointIds.splice(index, 1);
            this.unselectedHiddenDatapointIds.push(datapoint.timeSeriesId);
        }
        else {
            //hide datapoint
            this.hiddenDatapointIds.push(datapoint.timeSeriesId);
            this.selectedHiddenDatapointIds.push(datapoint.timeSeriesId);
        }
    };
    DatapointsPage.prototype.saveHiddenDatapoints = function () {
        this.properties.toggleHide = false;
        this.selectedHiddenDatapointIds = [];
        this.unselectedHiddenDatapointIds = [];
        this.datapointsService.setHiddenDatapointIds(this.hiddenDatapointIds).then(function () { }).catch(function () { });
    };
    DatapointsPage.prototype.cancelHiddenDatapoints = function () {
        this.properties.toggleHide = false;
        //datapoint was hidden
        //made it unhidden
        //pressed cancel
        //it should go back to being hidden, however it remains unhudden
        for (var _i = 0, _a = this.selectedHiddenDatapointIds; _i < _a.length; _i++) {
            var id = _a[_i];
            var index = this.hiddenDatapointIds.indexOf(id);
            if (index > -1) {
                this.hiddenDatapointIds.splice(index, 1);
            }
        }
        this.selectedHiddenDatapointIds = [];
        for (var _b = 0, _c = this.unselectedHiddenDatapointIds; _b < _c.length; _b++) {
            var id = _c[_b];
            var index = this.hiddenDatapointIds.indexOf(id);
            if (index < 0) {
                this.hiddenDatapointIds.push(id);
            }
        }
        this.unselectedHiddenDatapointIds = [];
    };
    DatapointsPage.prototype.getHiddenDatapointIds = function () {
        var _this = this;
        this.datapointsService.getHiddenDatapointIds().then(function (data) {
            _this.hiddenDatapointIds = data;
        }).catch(function () {
        });
    };
    DatapointsPage.prototype.changeDisplayType = function () {
        if (this.properties.displayType === "list") {
            this.properties.displayType = "grid";
        }
        else {
            this.properties.displayType = "list";
        }
    };
    DatapointsPage.prototype.accountPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_account_popover_account_popover_component__WEBPACK_IMPORTED_MODULE_3__["AccountPopoverComponent"],
                            event: ev,
                            translucent: true,
                            mode: "md"
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.present();
                        return [2 /*return*/, popover.onDidDismiss().then(function (data) {
                                if (data && data.data && data.data.data === "settings") {
                                    _this.router.navigate(['user-settings']);
                                }
                                else if (data && data.data && data.data.data === "logout") {
                                    _this.logout();
                                }
                            })];
                }
            });
        });
    };
    DatapointsPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm',
                            subHeader: 'Are you sure you want to logout?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Logout',
                                    handler: function (data) {
                                        _this.authenticationService.logout();
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
    DatapointsPage.prototype.dataPointsPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_datapoints_popover_datapoints_popover_component__WEBPACK_IMPORTED_MODULE_4__["DatapointsPopoverComponent"],
                            event: ev,
                            translucent: true,
                            mode: "md"
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.present();
                        return [2 /*return*/, popover.onDidDismiss().then(function (data) {
                                if (data && data.data && data.data.data === "showhide") {
                                    if (!_this.properties.toggleHide) {
                                        _this.properties.displayType = "list";
                                        _this.properties.toggleHide = true;
                                    }
                                    else {
                                        _this.properties.toggleHide = false;
                                    }
                                }
                                else if (data && data.data && data.data.data === "adddatapoint") {
                                    _this.addDatapoint();
                                }
                            })];
                }
            });
        });
    };
    DatapointsPage.prototype.addDatapoint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add a Datapoint',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    placeholder: 'Name of Datapoint'
                                },
                                {
                                    name: 'initial',
                                    type: 'number',
                                    placeholder: 'Initial value'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Create',
                                    handler: function (data) {
                                        _this.datapoints.push({ timeSeriesId: 0, timeSeriesName: data.name, value: data.initial });
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
    DatapointsPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).fromNow();
    };
    DatapointsPage.prototype.openLink = function (link) {
        this.iab.create(link, '_system');
    };
    DatapointsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _services_datapoints_datapoints_service__WEBPACK_IMPORTED_MODULE_5__["DatapointsService"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    DatapointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datapoints',
            template: __webpack_require__(/*! raw-loader!./datapoints.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/datapoints/datapoints.page.html"),
            styles: [__webpack_require__(/*! ./datapoints.page.scss */ "./src/app/pages/datapoints/datapoints.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_datapoints_datapoints_service__WEBPACK_IMPORTED_MODULE_5__["DatapointsService"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], DatapointsPage);
    return DatapointsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-datapoints-datapoints-module.js.map