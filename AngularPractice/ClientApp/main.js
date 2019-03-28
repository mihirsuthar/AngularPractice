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

module.exports = "<div class=\"wrapper\">\r\n    <app-side-bar></app-side-bar>\r\n    <div class=\"main-panel\">\r\n        <app-nav-bar></app-nav-bar>\r\n\r\n        <div class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n\r\n        <footer class=\"footer\">\r\n            <div class=\"container-fluid\">\r\n                <nav class=\"pull-left\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Portfolio\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Blog\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    <script>document.write(new Date().getFullYear())</script> <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'userProfile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"] },
    { path: 'tables', component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__["TableListComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"] },
    { path: 'maps', component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__["MapsComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__["TableListComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__["MapsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__["SideBarComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Email Statistics</h4>\r\n                <p class=\"category\">Last Campaign Performance</p>\r\n            </div>\r\n            <div class=\"content\">\r\n                <div id=\"chartPreferences\" class=\"ct-chart ct-perfect-fourth\"></div>\r\n                <div class=\"footer\">\r\n                    <div class=\"legend\">\r\n                        <i class=\"fa fa-circle text-info\"></i> Open\r\n                        <i class=\"fa fa-circle text-danger\"></i> Bounce\r\n                        <i class=\"fa fa-circle text-warning\"></i> Unsubscribe\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-clock-o\"></i> Campaign sent 2 days ago\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Users Behavior</h4>\r\n                <p class=\"category\">24 Hours performance</p>\r\n            </div>\r\n            <div class=\"content\">\r\n                <div id=\"chartHours\" class=\"ct-chart\"></div>\r\n                <div class=\"footer\">\r\n                    <div class=\"legend\">\r\n                        <i class=\"fa fa-circle text-info\"></i> Open\r\n                        <i class=\"fa fa-circle text-danger\"></i> Click\r\n                        <i class=\"fa fa-circle text-warning\"></i> Click Second Time\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-history\"></i> Updated 3 minutes ago\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card \">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">2014 Sales</h4>\r\n                <p class=\"category\">All products including Taxes</p>\r\n            </div>\r\n            <div class=\"content\">\r\n                <div id=\"chartActivity\" class=\"ct-chart\"></div>\r\n                <div class=\"footer\">\r\n                    <div class=\"legend\">\r\n                        <i class=\"fa fa-circle text-info\"></i> Tesla Model S\r\n                        <i class=\"fa fa-circle text-danger\"></i> BMW 5 Series\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-check\"></i> Data information certified\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card \">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Tasks</h4>\r\n                <p class=\"category\">Backend development</p>\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"table-full-width\">\r\n                    <table class=\"table\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"checkbox1\" type=\"checkbox\">\r\n                                        <label for=\"checkbox1\"></label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                <td class=\"td-actions text-right\">\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-times\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"checkbox2\" type=\"checkbox\" checked>\r\n                                        <label for=\"checkbox2\"></label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                <td class=\"td-actions text-right\">\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-times\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"checkbox3\" type=\"checkbox\">\r\n                                        <label for=\"checkbox3\"></label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                </td>\r\n                                <td class=\"td-actions text-right\">\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-times\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"checkbox4\" type=\"checkbox\" checked>\r\n                                        <label for=\"checkbox4\"></label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>Create 4 Invisible User Experiences you Never Knew About</td>\r\n                                <td class=\"td-actions text-right\">\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-times\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"checkbox5\" type=\"checkbox\">\r\n                                        <label for=\"checkbox5\"></label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>Read \"Following makes Medium better\"</td>\r\n                                <td class=\"td-actions text-right\">\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-times\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"checkbox6\" type=\"checkbox\" checked>\r\n                                        <label for=\"checkbox6\"></label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>Unfollow 5 enemies from twitter</td>\r\n                                <td class=\"td-actions text-right\">\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                        <i class=\"fa fa-times\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-history\"></i> Updated 3 minutes ago\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.css":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/icons/icons.component.html":
/*!********************************************!*\
  !*** ./src/app/icons/icons.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">202 Awesome Stroke Icons</h4>\r\n                <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"http://themes-pixeden.com/font-demos/7-stroke/index.html\">Pixeden</a></p>\r\n            </div>\r\n            <div class=\"content all-icons\">\r\n                <div class=\"row\">\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-album\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-album\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-arc\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-arc\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-back-2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-back-2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-bandaid\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-bandaid\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-car\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-car\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-diamond\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-diamond\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-door-lock\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-door-lock\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-eyedropper\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-eyedropper\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-female\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-female\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-gym\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-gym\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-hammer\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-hammer\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-headphones\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-headphones\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-helm\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-helm\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-hourglass\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-hourglass\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-leaf\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-leaf\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-magic-wand\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-magic-wand\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-male\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-male\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-map-2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-map-2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-next-2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-next-2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-paint-bucket\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-paint-bucket\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-pendrive\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-pendrive\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-photo\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-photo\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-piggy\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-piggy\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-plugin\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-plugin\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-refresh-2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-refresh-2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-rocket\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-rocket\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-settings\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-settings\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-shield\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-shield\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-smile\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-smile\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-usb\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-usb\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-vector\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-vector\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-wine\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-wine\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-cloud-upload\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-cloud-upload\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-cash\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-cash\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-close\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-close\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-bluetooth\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-bluetooth\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-cloud-download\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-cloud-download\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-way\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-way\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-close-circle\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-close-circle\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-id\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-id\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-up\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-up\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-wristwatch\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-wristwatch\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-up-circle\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-up-circle\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-world\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-world\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-right\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-right\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-volume\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-volume\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-right-circle\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-right-circle\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-users\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-users\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-left\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-left\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-user-female\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-user-female\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-left-circle\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-left-circle\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-up-arrow\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-up-arrow\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-down\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-down\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-switch\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-switch\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-angle-down-circle\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-angle-down-circle\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-scissors\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-scissors\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-wallet\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-wallet\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-safe\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-safe\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-volume2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-volume2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-volume1\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-volume1\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-voicemail\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-voicemail\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-video\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-video\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-user\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-user\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-upload\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-upload\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-unlock\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-unlock\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-umbrella\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-umbrella\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-trash\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-trash\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-tools\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-tools\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-timer\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-timer\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-ticket\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-ticket\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-target\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-target\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-sun\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-sun\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-study\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-study\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-stopwatch\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-stopwatch\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-star\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-star\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-speaker\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-speaker\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-signal\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-signal\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-shuffle\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-shuffle\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-shopbag\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-shopbag\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-share\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-share\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-server\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-server\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-search\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-search\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-film\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-film\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-science\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-science\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-disk\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-disk\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-ribbon\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-ribbon\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-repeat\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-repeat\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-refresh\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-refresh\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-add-user\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-add-user\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-refresh-cloud\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-refresh-cloud\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-paperclip\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-paperclip\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-radio\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-radio\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-note2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-note2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-print\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-print\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-network\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-network\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-prev\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-prev\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-mute\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-mute\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-power\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-power\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-medal\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-medal\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-portfolio\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-portfolio\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-like2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-like2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-plus\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-plus\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-left-arrow\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-left-arrow\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-play\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-play\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-key\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-key\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-plane\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-plane\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-joy\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-joy\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-photo-gallery\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-photo-gallery\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-pin\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-pin\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-phone\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-phone\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-plug\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-plug\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-pen\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-pen\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-right-arrow\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-right-arrow\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-paper-plane\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-paper-plane\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-delete-user\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-delete-user\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-paint\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-paint\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-bottom-arrow\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-bottom-arrow\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-notebook\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-notebook\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-note\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-note\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-next\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-next\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-news-paper\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-news-paper\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-musiclist\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-musiclist\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-music\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-music\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-mouse\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-mouse\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-more\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-more\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-moon\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-moon\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-monitor\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-monitor\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-micro\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-micro\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-menu\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-menu\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-map\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-map\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-map-marker\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-map-marker\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-mail\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-mail\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-mail-open\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-mail-open\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-mail-open-file\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-mail-open-file\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-magnet\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-magnet\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-loop\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-loop\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-look\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-look\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-lock\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-lock\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-lintern\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-lintern\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-link\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-link\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-like\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-like\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-light\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-light\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-less\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-less\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-keypad\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-keypad\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-junk\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-junk\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-info\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-info\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-home\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-home\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-help2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-help2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-help1\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-help1\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-graph3\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-graph3\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-graph2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-graph2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-graph1\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-graph1\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-graph\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-graph\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-global\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-global\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-gleam\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-gleam\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-glasses\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-glasses\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-gift\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-gift\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-folder\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-folder\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-flag\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-flag\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-filter\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-filter\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-file\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-file\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-expand1\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-expand1\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-exapnd2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-exapnd2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-edit\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-edit\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-drop\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-drop\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-drawer\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-drawer\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-download\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-download\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-display2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-display2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-display1\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-display1\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-diskette\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-diskette\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-date\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-date\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-cup\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-cup\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-culture\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-culture\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-crop\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-crop\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-credit\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-credit\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-copy-file\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-copy-file\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-config\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-config\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-compass\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-compass\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-comment\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-comment\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-coffee\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-coffee\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-cloud\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-cloud\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-clock\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-clock\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-check\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-check\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-chat\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-chat\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-cart\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-cart\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-camera\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-camera\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-call\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-call\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-calculator\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-calculator\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-browser\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-browser\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-box2\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-box2\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-box1\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-box1\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-bookmarks\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-bookmarks\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-bicycle\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-bicycle\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-bell\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-bell\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-battery\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-battery\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-ball\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-ball\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-back\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-back\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-attention\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-attention\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-anchor\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-anchor\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-albums\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-albums\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-alarm\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-alarm\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\r\n                        <div class=\"font-icon-detail\">\r\n                            <i class=\"pe-7s-airplay\"></i>\r\n                            <input type=\"text\" value=\"pe-7s-airplay\">\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.css */ "./src/app/icons/icons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.component.css":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/*!******************************************!*\
  !*** ./src/app/maps/maps.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n\r\n<script>\r\n        $().ready(function(){\r\n            demo.initGoogleMaps();\r\n        });\r\n</script>"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.css */ "./src/app/maps/maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\">Dashboard</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-left\">\r\n                <li>\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-dashboard\"></i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-globe\"></i>\r\n                        <b class=\"caret hidden-lg hidden-md\"></b>\r\n                        <p class=\"hidden-lg hidden-md\">\r\n                            5 Notifications\r\n                            <b class=\"caret\"></b>\r\n                        </p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">Notification 2</a></li>\r\n                        <li><a href=\"#\">Notification 3</a></li>\r\n                        <li><a href=\"#\">Notification 4</a></li>\r\n                        <li><a href=\"#\">Another notification</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                        <p class=\"hidden-lg hidden-md\">Search</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"\">\r\n                        <p>Account</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <p>\r\n                            Dropdown\r\n                            <b class=\"caret\"></b>\r\n                        </p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Action</a></li>\r\n                        <li><a href=\"#\">Another action</a></li>\r\n                        <li><a href=\"#\">Something</a></li>\r\n                        <li><a href=\"#\">Another action</a></li>\r\n                        <li><a href=\"#\">Something</a></li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <p>Log out</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"separator hidden-lg\"></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"header\">\r\n        <h4 class=\"title\">Notifications</h4>\r\n        <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\r\n\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h5>Notifications Style</h5>\r\n                <div class=\"alert alert-info\">\r\n                    <span>This is a plain notification</span>\r\n                </div>\r\n                <div class=\"alert alert-info\">\r\n                    <button type=\"button\" aria-hidden=\"true\" class=\"close\">�</button>\r\n                    <span>This is a notification with close button.</span>\r\n                </div>\r\n                <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                    <button type=\"button\" aria-hidden=\"true\" class=\"close\">�</button>\r\n                    <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\r\n                    <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                </div>\r\n                <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                    <button type=\"button\" aria-hidden=\"true\" class=\"close\">�</button>\r\n                    <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\r\n                    <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h5>Notification states</h5>\r\n                <div class=\"alert alert-info\">\r\n                    <button type=\"button\" aria-hidden=\"true\" class=\"close\">�</button>\r\n                    <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                </div>\r\n                <div class=\"alert alert-success\">\r\n                    <button type=\"button\" aria-hidden=\"true\" class=\"close\">�</button>\r\n                    <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                </div>\r\n                <div class=\"alert alert-warning\">\r\n                    <button type=\"button\" aria-hidden=\"true\" class=\"close\">�</button>\r\n                    <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                </div>\r\n                <div class=\"alert alert-danger\">\r\n                    <button type=\"button\" aria-hidden=\"true\" class=\"close\">�</button>\r\n                    <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"places-buttons\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-md-offset-3 text-center\">\r\n                    <h5>\r\n                        Notifications Places\r\n                        <p class=\"category\">Click to view notifications</p>\r\n                    </h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2 col-md-offset-3\">\r\n                    <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('top','left')\">Top Left</button>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('top','center')\">Top Center</button>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('top','right')\">Top Right</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2 col-md-offset-3\">\r\n                    <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('bottom','left')\">Bottom Left</button>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('bottom','center')\">Bottom Center</button>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <button class=\"btn btn-default btn-block\" onclick=\"demo.showNotification('bottom','right')\">Bottom Right</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\" data-image=\"assets/img/sidebar-5.jpg\">\r\n    <!--\r\n\r\n        Tip 1: you can change the color of the sidebar using: data-color=\"blue | azure | green | orange | red | purple\"\r\n        Tip 2: you can also add an image using data-image tag\r\n\r\n    -->\r\n    <div class=\"sidebar-wrapper\">\r\n        <div class=\"logo\">\r\n            <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\r\n                Ng-6 Class\r\n            </a>\r\n        </div>\r\n        <ul class=\"nav\">\r\n            <li>\r\n                <a [routerLink]=\"['/home']\" >\r\n                    <i class=\"pe-7s-graph\"></i>\r\n                    <p>Dashboard</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/userProfile']\">\r\n                    <i class=\"pe-7s-user\"></i>\r\n                    <p>User Profile</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/tables']\">\r\n                    <i class=\"pe-7s-note2\"></i>\r\n                    <p>Table List</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/typography']\">\r\n                    <i class=\"pe-7s-news-paper\"></i>\r\n                    <p>Typography</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/icons']\">\r\n                    <i class=\"pe-7s-science\"></i>\r\n                    <p>Icons</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/maps']\">\r\n                    <i class=\"pe-7s-map-marker\"></i>\r\n                    <p>Maps</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/notifications']\">\r\n                    <i class=\"pe-7s-bell\"></i>\r\n                    <p>Notifications</p>\r\n                </a>\r\n            </li>\r\n            <!--<li class=\"active-pro\">\r\n                <a href=\"upgrade.html\">\r\n                    <i class=\"pe-7s-rocket\"></i>\r\n                    <p>Upgrade to PRO</p>\r\n                </a>\r\n            </li>-->\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/side-bar/side-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/table-list/table-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/table-list/table-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Striped Table with Hover</h4>\r\n                <p class=\"category\">Here is a subtitle for this table</p>\r\n            </div>\r\n            <div class=\"content table-responsive table-full-width\">\r\n                <table class=\"table table-hover table-striped\">\r\n                    <thead>\r\n                    <th>ID</th>\r\n                    <th>Name</th>\r\n                    <th>Salary</th>\r\n                    <th>Country</th>\r\n                    <th>City</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>1</td>\r\n                            <td>Dakota Rice</td>\r\n                            <td>$36,738</td>\r\n                            <td>Niger</td>\r\n                            <td>Oud-Turnhout</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>2</td>\r\n                            <td>Minerva Hooper</td>\r\n                            <td>$23,789</td>\r\n                            <td>Cura�ao</td>\r\n                            <td>Sinaai-Waas</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>3</td>\r\n                            <td>Sage Rodriguez</td>\r\n                            <td>$56,142</td>\r\n                            <td>Netherlands</td>\r\n                            <td>Baileux</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>4</td>\r\n                            <td>Philip Chaney</td>\r\n                            <td>$38,735</td>\r\n                            <td>Korea, South</td>\r\n                            <td>Overland Park</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>5</td>\r\n                            <td>Doris Greene</td>\r\n                            <td>$63,542</td>\r\n                            <td>Malawi</td>\r\n                            <td>Feldkirchen in K�rnten</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>6</td>\r\n                            <td>Mason Porter</td>\r\n                            <td>$78,615</td>\r\n                            <td>Chile</td>\r\n                            <td>Gloucester</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card card-plain\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Table on Plain Background</h4>\r\n                <p class=\"category\">Here is a subtitle for this table</p>\r\n            </div>\r\n            <div class=\"content table-responsive table-full-width\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                    <th>ID</th>\r\n                    <th>Name</th>\r\n                    <th>Salary</th>\r\n                    <th>Country</th>\r\n                    <th>City</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>1</td>\r\n                            <td>Dakota Rice</td>\r\n                            <td>$36,738</td>\r\n                            <td>Niger</td>\r\n                            <td>Oud-Turnhout</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>2</td>\r\n                            <td>Minerva Hooper</td>\r\n                            <td>$23,789</td>\r\n                            <td>Cura�ao</td>\r\n                            <td>Sinaai-Waas</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>3</td>\r\n                            <td>Sage Rodriguez</td>\r\n                            <td>$56,142</td>\r\n                            <td>Netherlands</td>\r\n                            <td>Baileux</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>4</td>\r\n                            <td>Philip Chaney</td>\r\n                            <td>$38,735</td>\r\n                            <td>Korea, South</td>\r\n                            <td>Overland Park</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>5</td>\r\n                            <td>Doris Greene</td>\r\n                            <td>$63,542</td>\r\n                            <td>Malawi</td>\r\n                            <td>Feldkirchen in K�rnten</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>6</td>\r\n                            <td>Mason Porter</td>\r\n                            <td>$78,615</td>\r\n                            <td>Chile</td>\r\n                            <td>Gloucester</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-list',
            template: __webpack_require__(/*! ./table-list.component.html */ "./src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__(/*! ./table-list.component.css */ "./src/app/table-list/table-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "./src/app/typography/typography.component.css":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/typography/typography.component.html":
/*!******************************************************!*\
  !*** ./src/app/typography/typography.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Light Bootstrap Table Heading</h4>\r\n                <p class=\"category\">Created using Roboto Font Family</p>\r\n            </div>\r\n            <div class=\"content\">\r\n\r\n                <div class=\"typo-line\">\r\n                    <h1><p class=\"category\">Header 1</p>Light Bootstrap Table Heading </h1>\r\n                </div>\r\n\r\n                <div class=\"typo-line\">\r\n                    <h2><p class=\"category\">Header 2</p>Light Bootstrap Table Heading</h2>\r\n                </div>\r\n                <div class=\"typo-line\">\r\n                    <h3><p class=\"category\">Header 3</p>Light Bootstrap Table Heading</h3>\r\n                </div>\r\n                <div class=\"typo-line\">\r\n                    <h4><p class=\"category\">Header 4</p>Light Bootstrap Table Heading</h4>\r\n                </div>\r\n                <div class=\"typo-line\">\r\n                    <h5><p class=\"category\">Header 5</p>Light Bootstrap Table Heading</h5>\r\n                </div>\r\n                <div class=\"typo-line\">\r\n                    <h6><p class=\"category\">Header 6</p>Light Bootstrap Table Heading</h6>\r\n                </div>\r\n                <div class=\"typo-line\">\r\n                    <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\r\n                </div>\r\n                <div class=\"typo-line\">\r\n                    <p class=\"category\">Quote</p>\r\n                    <blockquote>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\r\n                        </p>\r\n                        <small>\r\n                            Steve Jobs, CEO Apple\r\n                        </small>\r\n                    </blockquote>\r\n                </div>\r\n\r\n                <div class=\"typo-line\">\r\n                    <p class=\"category\">Muted Text</p>\r\n                    <p class=\"text-muted\">\r\n                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\r\n                    </p>\r\n                </div>\r\n                <div class=\"typo-line\">\r\n                    <!--\r\n                     there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\r\n                     -->\r\n                    <p class=\"category\">Coloured Text</p>\r\n                    <p class=\"text-primary\">\r\n                        Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                    </p>\r\n                    <p class=\"text-info\">\r\n                        Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                    </p>\r\n                    <p class=\"text-success\">\r\n                        Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                    </p>\r\n                    <p class=\"text-warning\">\r\n                        Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                    </p>\r\n                    <p class=\"text-danger\">\r\n                        Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"typo-line\">\r\n                    <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.css */ "./src/app/typography/typography.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Edit Profile</h4>\r\n            </div>\r\n            <div class=\"content\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\">\r\n                                <label>Company (disabled)</label>\r\n                                <input type=\"text\" class=\"form-control\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label>Username</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"exampleInputEmail1\">Email address</label>\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>First Name</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Last Name</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Address</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>City</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Country</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Postal Code</label>\r\n                                <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>About Me</label>\r\n                                <textarea rows=\"5\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Update Profile</button>\r\n                    <div class=\"clearfix\"></div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card card-user\">\r\n            <div class=\"image\">\r\n                <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\" />\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"author\">\r\n                    <a href=\"#\">\r\n                        <img class=\"avatar border-gray\" src=\"assets/img/faces/face-3.jpg\" alt=\"...\" />\r\n\r\n                        <h4 class=\"title\">\r\n                            Mike Andrew<br />\r\n                            <small>michael24</small>\r\n                        </h4>\r\n                    </a>\r\n                </div>\r\n                <p class=\"description text-center\">\r\n                    \"Lamborghini Mercy <br>\r\n                    Your chick she so thirsty <br>\r\n                    I'm in that two seat Lambo\"\r\n                </p>\r\n            </div>\r\n            <hr>\r\n            <div class=\"text-center\">\r\n                <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\r\n                <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\r\n                <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Mihir\source\repos\AngularPractice\AngularPractice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map