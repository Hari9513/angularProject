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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_comp_form_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-comp/form-comp.component */ "./src/app/form-comp/form-comp.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-form/new-form.component */ "./src/app/new-form/new-form.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/view-user/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { ResolveService } from './resolveService';
var routes = [
    {
        path: 'home',
        component: _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"]
    },
    {
        path: 'userForm/:id',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]
    },
    {
        path: 'userList',
        component: _form_comp_form_comp_component__WEBPACK_IMPORTED_MODULE_6__["FormCompComponent"]
    },
    {
        path: 'newForm',
        component: _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_9__["NewFormComponent"]
    },
    {
        path: 'viewUser',
        component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_10__["ViewUserComponent"]
    },
    {
        path: '',
        redirectTo: '/userList',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/userList'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _form_comp_form_comp_component__WEBPACK_IMPORTED_MODULE_6__["FormCompComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _new_form_new_form_component__WEBPACK_IMPORTED_MODULE_9__["NewFormComponent"],
                _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_10__["ViewUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form-comp/form-comp.component.css":
/*!***************************************************!*\
  !*** ./src/app/form-comp/form-comp.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mt-10 {\r\n\tmargin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/form-comp/form-comp.component.html":
/*!****************************************************!*\
  !*** ./src/app/form-comp/form-comp.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"text-right mt-10\">\r\n        <button class=\"btn btn-primary\" routerLink=\"/newForm\">Create User</button>\r\n\t\t\t</div>\r\n      <table class=\"table table-bordered mt-10\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Name</th>\r\n            <th>Address</th>\r\n            <th>PAN Number</th>\r\n            <th>Aadhar Number</th>\r\n            <th>Action</th>\r\n            <th>Delete</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of userData index as i\">\r\n          \t<td class=\"text-center\">{{i+1}}</td>\r\n            <td class=\"text-center text-capitalize\">{{user.name?user.name:'N/A'}}</td>\r\n            <td class=\"text-center\">{{user.address?user.address:'N/A'}}</td>\r\n            <td class=\"text-center\">{{user.pan}}</td>\r\n            <td class=\"text-center\">{{user.aadhar?user.aadhar:'N/A'}}</td>\r\n            <td class=\"text-center\" routerLink=\"/viewUser\" [queryParams]=\"{id: i}\">Edit</td>\r\n            <td class=\"text-center\" (click)=\"deleteUser(user.email)\">Delete</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-comp/form-comp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-comp/form-comp.component.ts ***!
  \**************************************************/
/*! exports provided: FormCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCompComponent", function() { return FormCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-service.service */ "./src/app/my-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormCompComponent = /** @class */ (function () {
    function FormCompComponent(friendServ) {
        this.friendServ = friendServ;
        this.getUser();
    }
    FormCompComponent.prototype.ngOnInit = function () {
    };
    FormCompComponent.prototype.getUser = function () {
        var _this = this;
        this.friendServ.getUser()
            .then(function (data) {
            _this.userData = data;
        });
    };
    FormCompComponent.prototype.deleteUser = function (data) {
        var _this = this;
        var email = data;
        this.friendServ.deleteUserByID({ email: email })
            .then(function (data) {
            _this.getUser();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    FormCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-comp',
            template: __webpack_require__(/*! ./form-comp.component.html */ "./src/app/form-comp/form-comp.component.html"),
            styles: [__webpack_require__(/*! ./form-comp.component.css */ "./src/app/form-comp/form-comp.component.css")]
        }),
        __metadata("design:paramtypes", [_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]])
    ], FormCompComponent);
    return FormCompComponent;
}());



/***/ }),

/***/ "./src/app/my-service.service.ts":
/*!***************************************!*\
  !*** ./src/app/my-service.service.ts ***!
  \***************************************/
/*! exports provided: MyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceService", function() { return MyServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiURL = 'http://localhost:8000/api/user';
var MyServiceService = /** @class */ (function () {
    function MyServiceService(http) {
        this.http = http;
    }
    MyServiceService.prototype.getUser = function () {
        return this.http.get(apiURL)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MyServiceService.prototype.getUserByID = function (data) {
        return this.http.put(apiURL, data)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MyServiceService.prototype.deleteUserByID = function (data) {
        return this.http.post(apiURL + '/delete', data)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MyServiceService.prototype.createUser = function (data) {
        return this.http.post(apiURL, data)
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MyServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyServiceService);
    return MyServiceService;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/friendsForm\">User List <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-service.service */ "./src/app/my-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(friendServ) {
        this.friendServ = friendServ;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/new-form/new-form.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-form/new-form.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-form/new-form.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-form/new-form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center mt-3\">\r\n    <div class=\"col-6\">\r\n      <h3>Create User</h3>\r\n      <form name=\"myForm\" #myForm=\"ngForm\" (ngSubmit)=\"submitForm(user)\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" placeholder=\"Enter Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"address\" class=\"form-control\" [(ngModel)]=\"user.address\" placeholder=\"Enter Address\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"pan\" class=\"form-control\" [(ngModel)]=\"user.pan\" placeholder=\"Enter PAN Number\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" email name=\"aadhar\" class=\"form-control\" [(ngModel)]=\"user.aadhar\" placeholder=\"Enter Aadhar Number\" required>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/new-form/new-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-form/new-form.component.ts ***!
  \************************************************/
/*! exports provided: NewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormComponent", function() { return NewFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-service.service */ "./src/app/my-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormGroup, FormBuilder, Validators } from '@angular/forms';


var NewFormComponent = /** @class */ (function () {
    function NewFormComponent(myServ, route) {
        this.myServ = myServ;
        this.route = route;
        this.user = {};
    }
    NewFormComponent.prototype.ngOnInit = function () {
    };
    NewFormComponent.prototype.submitForm = function (user) {
        var _this = this;
        this.myServ.createUser(user)
            .then(function (data) {
            _this.route.navigate(['/userList']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NewFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-form',
            template: __webpack_require__(/*! ./new-form.component.html */ "./src/app/new-form/new-form.component.html"),
            styles: [__webpack_require__(/*! ./new-form.component.css */ "./src/app/new-form/new-form.component.css")]
        }),
        __metadata("design:paramtypes", [_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewFormComponent);
    return NewFormComponent;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Friend Details</h1>\r\n<ul class=\"list-group\" *ngFor=\"let key of userData\">\r\n  <li appHiglt class=\"list-group-item\">{{key}}: {{friendData[key]}}</li>\r\n</ul>"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my-service.service */ "./src/app/my-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(route, friendServ) {
        this.route = route;
        this.friendServ = friendServ;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.friendServ.getUser()
            .then(function (data) {
        });
        // var id = this.route.snapshot.params.id;
        // var ID = Number(id);
        // this.friendData = this.friendServ.getFriends(ID);
        // this.userData = Object.keys(this.friendData);
        // console.log(this.friendServ.getFriendsList());
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _my_service_service__WEBPACK_IMPORTED_MODULE_2__["MyServiceService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/view-user/view-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-user/view-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-user/view-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-user/view-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center mt-3\">\r\n    <div class=\"col-6\">\r\n      <h3>Edit User</h3>\r\n      <form name=\"myForm\" #myForm=\"ngForm\" (ngSubmit)=\"updateForm(user)\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" placeholder=\"Enter Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"address\" class=\"form-control\" [(ngModel)]=\"user.address\" placeholder=\"Enter Address\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"pan\" class=\"form-control\" [(ngModel)]=\"user.pan\" placeholder=\"Enter PAN Number\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" email name=\"aadhar\" class=\"form-control\" [(ngModel)]=\"user.aadhar\" placeholder=\"Enter Aadhar Number\" required>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view-user/view-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-user/view-user.component.ts ***!
  \**************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-service.service */ "./src/app/my-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(userServ, route, router) {
        this.userServ = userServ;
        this.route = route;
        this.router = router;
        this.user = {};
        this.userData = {};
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            _this.orderObj = __assign({}, params);
            _this.getAllUsers(_this.orderObj);
        });
    };
    ViewUserComponent.prototype.getAllUsers = function (userId) {
        var _this = this;
        this.userServ.getUser()
            .then(function (data) {
            var ID = userId.params.id;
            _this.user = data[ID];
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ViewUserComponent.prototype.updateForm = function (data) {
        var _this = this;
        this.userServ.getUserByID(data)
            .then(function (data) {
            _this.router.navigate(['/friendsForm']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewUserComponent);
    return ViewUserComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map