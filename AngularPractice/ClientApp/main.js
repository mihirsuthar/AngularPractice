(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"purple\" data-image=\"assets/img/sidebar-5.jpg\">\r\n        <!--\r\n\r\n            Tip 1: you can change the color of the sidebar using: data-color=\"blue | azure | green | orange | red | purple\"\r\n            Tip 2: you can also add an image using data-image tag\r\n\r\n        -->\r\n        <div class=\"sidebar-wrapper\">\r\n            <div class=\"logo\">\r\n                <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\r\n                    Creative Tim\r\n                </a>\r\n            </div>\r\n            <ul class=\"nav\">\r\n                <li class=\"active\">\r\n                    <a href=\"dashboard.html\">\r\n                        <i class=\"pe-7s-graph\"></i>\r\n                        <p>Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"user.html\">\r\n                        <i class=\"pe-7s-user\"></i>\r\n                        <p>User Profile</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"table.html\">\r\n                        <i class=\"pe-7s-note2\"></i>\r\n                        <p>Table List</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"typography.html\">\r\n                        <i class=\"pe-7s-news-paper\"></i>\r\n                        <p>Typography</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"icons.html\">\r\n                        <i class=\"pe-7s-science\"></i>\r\n                        <p>Icons</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"maps.html\">\r\n                        <i class=\"pe-7s-map-marker\"></i>\r\n                        <p>Maps</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"notifications.html\">\r\n                        <i class=\"pe-7s-bell\"></i>\r\n                        <p>Notifications</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"active-pro\">\r\n                    <a href=\"upgrade.html\">\r\n                        <i class=\"pe-7s-rocket\"></i>\r\n                        <p>Upgrade to PRO</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <nav class=\"navbar navbar-default navbar-fixed\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\r\n                        <span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <a class=\"navbar-brand\" href=\"#\">Dashboard</a>\r\n                </div>\r\n                <div class=\"collapse navbar-collapse\">\r\n                    <ul class=\"nav navbar-nav navbar-left\">\r\n                        <li>\r\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                <i class=\"fa fa-dashboard\"></i>\r\n                                <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"dropdown\">\r\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                <i class=\"fa fa-globe\"></i>\r\n                                <b class=\"caret hidden-lg hidden-md\"></b>\r\n                                <p class=\"hidden-lg hidden-md\">\r\n                                    5 Notifications\r\n                                    <b class=\"caret\"></b>\r\n                                </p>\r\n                            </a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\">Notification 1</a></li>\r\n                                <li><a href=\"#\">Notification 2</a></li>\r\n                                <li><a href=\"#\">Notification 3</a></li>\r\n                                <li><a href=\"#\">Notification 4</a></li>\r\n                                <li><a href=\"#\">Another notification</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"\">\r\n                                <i class=\"fa fa-search\"></i>\r\n                                <p class=\"hidden-lg hidden-md\">Search</p>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <ul class=\"nav navbar-nav navbar-right\">\r\n                        <li>\r\n                            <a href=\"\">\r\n                                <p>Account</p>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"dropdown\">\r\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                <p>\r\n                                    Dropdown\r\n                                    <b class=\"caret\"></b>\r\n                                </p>\r\n                            </a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\">Action</a></li>\r\n                                <li><a href=\"#\">Another action</a></li>\r\n                                <li><a href=\"#\">Something</a></li>\r\n                                <li><a href=\"#\">Another action</a></li>\r\n                                <li><a href=\"#\">Something</a></li>\r\n                                <li class=\"divider\"></li>\r\n                                <li><a href=\"#\">Separated link</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                <p>Log out</p>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"separator hidden-lg\"></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n        <div class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card\">\r\n                            <div class=\"header\">\r\n                                <h4 class=\"title\">Email Statistics</h4>\r\n                                <p class=\"category\">Last Campaign Performance</p>\r\n                            </div>\r\n                            <div class=\"content\">\r\n                                <div id=\"chartPreferences\" class=\"ct-chart ct-perfect-fourth\"></div>\r\n                                <div class=\"footer\">\r\n                                    <div class=\"legend\">\r\n                                        <i class=\"fa fa-circle text-info\"></i> Open\r\n                                        <i class=\"fa fa-circle text-danger\"></i> Bounce\r\n                                        <i class=\"fa fa-circle text-warning\"></i> Unsubscribe\r\n                                    </div>\r\n                                    <hr>\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"fa fa-clock-o\"></i> Campaign sent 2 days ago\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"card\">\r\n                            <div class=\"header\">\r\n                                <h4 class=\"title\">Users Behavior</h4>\r\n                                <p class=\"category\">24 Hours performance</p>\r\n                            </div>\r\n                            <div class=\"content\">\r\n                                <div id=\"chartHours\" class=\"ct-chart\"></div>\r\n                                <div class=\"footer\">\r\n                                    <div class=\"legend\">\r\n                                        <i class=\"fa fa-circle text-info\"></i> Open\r\n                                        <i class=\"fa fa-circle text-danger\"></i> Click\r\n                                        <i class=\"fa fa-circle text-warning\"></i> Click Second Time\r\n                                    </div>\r\n                                    <hr>\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"fa fa-history\"></i> Updated 3 minutes ago\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card \">\r\n                            <div class=\"header\">\r\n                                <h4 class=\"title\">2014 Sales</h4>\r\n                                <p class=\"category\">All products including Taxes</p>\r\n                            </div>\r\n                            <div class=\"content\">\r\n                                <div id=\"chartActivity\" class=\"ct-chart\"></div>\r\n                                <div class=\"footer\">\r\n                                    <div class=\"legend\">\r\n                                        <i class=\"fa fa-circle text-info\"></i> Tesla Model S\r\n                                        <i class=\"fa fa-circle text-danger\"></i> BMW 5 Series\r\n                                    </div>\r\n                                    <hr>\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"fa fa-check\"></i> Data information certified\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card \">\r\n                            <div class=\"header\">\r\n                                <h4 class=\"title\">Tasks</h4>\r\n                                <p class=\"category\">Backend development</p>\r\n                            </div>\r\n                            <div class=\"content\">\r\n                                <div class=\"table-full-width\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input id=\"checkbox1\" type=\"checkbox\">\r\n                                                        <label for=\"checkbox1\"></label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-times\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input id=\"checkbox2\" type=\"checkbox\" checked>\r\n                                                        <label for=\"checkbox2\"></label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-times\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input id=\"checkbox3\" type=\"checkbox\">\r\n                                                        <label for=\"checkbox3\"></label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                </td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-times\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input id=\"checkbox4\" type=\"checkbox\" checked>\r\n                                                        <label for=\"checkbox4\"></label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-times\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input id=\"checkbox5\" type=\"checkbox\">\r\n                                                        <label for=\"checkbox5\"></label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Read \"Following makes Medium better\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-times\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input id=\"checkbox6\" type=\"checkbox\" checked>\r\n                                                        <label for=\"checkbox6\"></label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Unfollow 5 enemies from twitter</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"fa fa-times\"></i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"footer\">\r\n                                    <hr>\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"fa fa-history\"></i> Updated 3 minutes ago\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <footer class=\"footer\">\r\n            <div class=\"container-fluid\">\r\n                <nav class=\"pull-left\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Portfolio\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Blog\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    <script>document.write(new Date().getFullYear())</script> <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NgMvcDemo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Omatics_India\Source\Repos\AngularPractice\AngularPractice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map