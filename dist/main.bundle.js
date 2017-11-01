webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{title}}\r\n  </h1>\r\n  <!--img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\r\n</div>\r\n\r\n  <!--<app-home [file]=\"file\" (onYell)=\"yell($event)\">Your files are listed above.</app-home>-->\r\n  <nav>\r\n    <ul>\r\n      <li><a routerLink='/' routerLinkActive=\"active\">Home</a></li>\r\n      <li><a routerLink='/about' routerLinkActive=\"active\">About Us</a></li>\r\n      <li><a routerLink='/documents/' routerLinkActive=\"active\">Documents</a></li>\r\n      <li><a routerLink='/documents/:item' routerLinkActive=\"active\">File Directory (old)</a></li>\r\n    </ul>\r\n  </nav>\r\n  <section id=\"home\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<section id=\"links\">\r\n<h2>Here are some links to help you start: </h2>\r\n  <ul>\r\n    <li>\r\n      <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n    </li>\r\n    <li>\r\n      <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n    </li>\r\n    <li>\r\n      <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ConCat: Conceptualizer and Categorizer';
        this.name = 'file';
        this.file = {
            name: "name from AppComponent",
            body: "body from AppComponent"
        };
    }
    AppComponent.prototype.yell = function (e) {
        alert("I am yelling.");
        console.log(e);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documents_document_details_document_details_component__ = __webpack_require__("../../../../../src/app/documents/document-details/document-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__documents_document_list_document_list_component__ = __webpack_require__("../../../../../src/app/documents/document-list/document-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__documents_document_details_document_details_component__["a" /* DocumentDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__documents_document_list_document_list_component__["a" /* DocumentListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* APP_ROUTES_PROVIDER */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documents_document_list_document_list_component__ = __webpack_require__("../../../../../src/app/documents/document-list/document-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");




var APP_ROUTES = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_0__about_about_component__["a" /* AboutComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'documents', component: __WEBPACK_IMPORTED_MODULE_2__documents_document_list_document_list_component__["a" /* DocumentListComponent */] },
    { path: 'documents/:item', component: __WEBPACK_IMPORTED_MODULE_2__documents_document_list_document_list_component__["a" /* DocumentListComponent */] }
];
var APP_ROUTES_PROVIDER = __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document-details/document-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/documents/document-details/document-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"document\" class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h2 *ngIf=\"document._id\">Document Details</h2>\r\n    <h2 *ngIf=\"!document._id\">New Document</h2>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"document\" class=\"row\">\r\n  <form class=\"col-md-12\">\r\n    <div class=\"form-group\">\r\n      <label for=\"document-name\">Name</label>\r\n      <input class=\"form-control\" name=\"document-name\" [(ngModel)]=\"document.name\" placeholder=\"Name\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"document-email\">Body</label>\r\n      <input class=\"form-control\" name=\"document-body\" [(ngModel)]=\"document.body\" placeholder=\"support@mlab.com\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"document-categories-cluster\">Cluster</label>\r\n      <input class=\"form-control\" name=\"document-categories-cluster\" [(ngModel)]=\"document.categories.cluster\" placeholder=\"1234567890\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"document-categories-group\">Group</label>\r\n      <input class=\"form-control\" name=\"document-categories-group\" [(ngModel)]=\"document.categories.group\" placeholder=\"0123456789\"/>\r\n    </div>\r\n    <button class=\"btn btn-primary\" *ngIf=\"!document._id\" (click)=\"createDocument(document)\">Create</button>\r\n    <button class=\"btn btn-info\" *ngIf=\"document._id\" (click)=\"updateDocument(document)\">Update</button>\r\n    <button class=\"btn btn-danger\" *ngIf=\"document._id\" (click)=\"deleteDocument(document._id)\">Delete</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/documents/document-details/document-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document__ = __webpack_require__("../../../../../src/app/documents/document.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_service__ = __webpack_require__("../../../../../src/app/documents/document.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentDetailsComponent = (function () {
    function DocumentDetailsComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentDetailsComponent.prototype.createDocument = function (document) {
        var _this = this;
        this.documentService.createDocument(document).then(function (newDocument) {
            _this.createHandler(newDocument);
        });
    };
    DocumentDetailsComponent.prototype.updateDocument = function (document) {
        var _this = this;
        this.documentService.updateDocument(document).then(function (updatedDocument) {
            _this.updateHandler(updatedDocument);
        });
    };
    DocumentDetailsComponent.prototype.deleteDocument = function (documentId) {
        var _this = this;
        this.documentService.deleteDocument(documentId).then(function (deletedDocumentId) {
            _this.deleteHandler(deletedDocumentId);
        });
    };
    return DocumentDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__document__["a" /* Document */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__document__["a" /* Document */]) === "function" && _a || Object)
], DocumentDetailsComponent.prototype, "document", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DocumentDetailsComponent.prototype, "createHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DocumentDetailsComponent.prototype, "updateHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DocumentDetailsComponent.prototype, "deleteHandler", void 0);
DocumentDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'document-details',
        template: __webpack_require__("../../../../../src/app/documents/document-details/document-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/documents/document-details/document-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */]) === "function" && _b || Object])
], DocumentDetailsComponent);

var _a, _b;
//# sourceMappingURL=document-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document-list/document-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/documents/document-list/document-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  directory works!\r\n</p>\r\n<p>{{item}}</p>\r\n<br />\r\n<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h2>Documents</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\"\r\n        *ngFor=\"let document of documents\"\r\n        (click)=\"selectDocument(document)\"\r\n        [class.active]=\"document === selectedDocument\">\r\n        {{document.name}}\r\n      </li>\r\n    </ul>\r\n    <button class=\"btn btn-warning\" (click)=\"createNewDocument()\">New</button>\r\n  </div>\r\n  <div class=\"col-md-5 col-md-offset-2\">\r\n    <document-details\r\n      [document]=\"selectedDocument\"\r\n      [createHandler]=\"addDocument\"\r\n      [updateHandler]=\"updateDocument\"\r\n      [deleteHandler]=\"deleteDocument\">\r\n    </document-details>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/documents/document-list/document-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_service__ = __webpack_require__("../../../../../src/app/documents/document.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentListComponent = (function () {
    function DocumentListComponent(documentService, route) {
        var _this = this;
        this.documentService = documentService;
        this.route = route;
        this.getIndexOfDocument = function (documentId) {
            return _this.documents.findIndex(function (document) {
                return document._id === documentId;
            });
        };
        this.deleteDocument = function (documentId) {
            var idx = _this.getIndexOfDocument(documentId);
            if (idx !== -1) {
                _this.documents.splice(idx, 1);
                _this.selectDocument(null);
            }
            return _this.documents;
        };
        this.addDocument = function (document) {
            _this.documents.push(document);
            _this.selectDocument(document);
            return _this.documents;
        };
        this.updateDocument = function (document) {
            var idx = _this.getIndexOfDocument(document._id);
            if (idx !== -1) {
                _this.documents[idx] = document;
                _this.selectDocument(document);
            }
            return _this.documents;
        };
        this.item = route.snapshot.params['item'];
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService
            .getDocuments()
            .then(function (documents) {
            _this.documents = documents.map(function (document) {
                if (!document.categories) {
                    document.categories = {
                        cluster: '',
                        group: ''
                    };
                }
                return document;
            });
        });
    };
    DocumentListComponent.prototype.selectDocument = function (document) {
        this.selectedDocument = document;
    };
    DocumentListComponent.prototype.createNewDocument = function () {
        var document = {
            name: '',
            body: '',
            categories: {
                cluster: '',
                group: ''
            }
        };
        // By default, a newly-created document will have the selected state.
        this.selectDocument(document);
    };
    return DocumentListComponent;
}());
DocumentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'document-list',
        template: __webpack_require__("../../../../../src/app/documents/document-list/document-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/documents/document-list/document-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], DocumentListComponent);

var _a, _b;
//# sourceMappingURL=document-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentService = (function () {
    function DocumentService(http) {
        this.http = http;
        this.documentsUrl = '/api/documents';
    }
    // get("/api/documents")
    DocumentService.prototype.getDocuments = function () {
        return this.http.get(this.documentsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/documents")
    DocumentService.prototype.createDocument = function (newDocument) {
        return this.http.post(this.documentsUrl, newDocument)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/documents/:id") endpoint not used by Angular app
    // delete("/api/documents/:id")
    DocumentService.prototype.deleteDocument = function (delDocumentId) {
        return this.http.delete(this.documentsUrl + '/' + delDocumentId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/documents/:id")
    DocumentService.prototype.updateDocument = function (putDocument) {
        var putUrl = this.documentsUrl + '/' + putDocument._id;
        return this.http.put(putUrl, putDocument)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DocumentService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console
        return Promise.reject(errMsg);
    };
    return DocumentService;
}());
DocumentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DocumentService);

var _a;
//# sourceMappingURL=document.service.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = (function () {
    function Document() {
    }
    return Document;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Upload your files here:</h1>\r\n  <form ng-controller = \"myCtrl\">\r\n     <input type = \"file\" file-model=\"files\" multiple/>\r\n     <button ng-click = \"uploadFile()\">Upload</button>\r\n     <!-- <li ng-repeat=\"file in files\">{{file.name}}</li> -->\r\n  </form>\r\n  <script src = \"http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js\"></script>\r\n  <script>\r\n    angular.module('myApp', []).directive('fileModel', ['$parse', function ($parse) {\r\n      return {\r\n        restrict: 'A',\r\n          link: function(scope, element, attrs) {\r\n            element.bind('change', function(){\r\n              $parse(attrs.fileModel).assign(scope,element[0].files)\r\n                scope.$apply();\r\n            });\r\n          }\r\n        };\r\n     }]).controller('myCtrl', ['$scope', '$http', function($scope, $http){\r\n       $scope.uploadFile=function(){\r\n         var fd=new FormData();\r\n         console.log($scope.files);\r\n         angular.forEach($scope.files,function(file){\r\n           fd.append('file',file);\r\n         });\r\n         $http.post('http://localhost:1337/mediaobject/upload',fd,\r\n                                                            {\r\n                                                            transformRequest: angular.identity,\r\n                                                            headers: {'Content-Type': undefined}\r\n                                                            }).success(function(d){\r\n                                                            console.log(d);\r\n                                                            })\r\n                                                          }\r\n    }]);\r\n  </script>\r\n  <br />\r\n  <br />\r\n  <!-- <form> -->\r\n    <input id=\"upload\" type=\"file\" accept=\".txt\" ng-file-model=\"files\" name=\"files[]\" size=30 (change)=\"changeListener($event)\" multiple />\r\n    <!-- <li ng-repeat=\"file in files[]\">{{file.name}}</li> -->\r\n  <!-- </form> -->\r\n\r\n  <textarea class=\"form-control\" rows=15 cols=120 id=\"ms_word_filtered_html\">{{fileContent}}</textarea>\r\n\r\n  <output id=\"list\"></output>\r\n\r\n  <script>\r\n    function handleFileSelect(evt) {\r\n      var files = evt.target.files; // FileList object\r\n\r\n      // files is a FileList of File objects. List some properties.\r\n      var output = [];\r\n      for (var i = 0, f; f = files[i]; i++) {\r\n        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',\r\n                    f.size, ' bytes, last modified: ',\r\n                    f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',\r\n                    '</li>');\r\n      }\r\n      document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';\r\n    }\r\n\r\n    document.getElementById('files').addEventListener('change', handleFileSelect, false);\r\n  </script>\r\n  <!-- <script src=\"assets/js/jquery-2.1.1.js\"> -->\r\n  <!-- <script>\r\n  function handleFileSelect(evt) {\r\n      var files = evt.target.files; // FileList object\r\n\r\n      // use the 1st file from the list\r\n      f = files[0];\r\n\r\n      var reader = new FileReader();\r\n\r\n      // Closure to capture the file information.\r\n      reader.onload = (function(theFile) {\r\n          return function(e) {\r\n            var text = e.target.result;\r\n            console.log(text);\r\n            jQuery( '#ms_word_filtered_html' ).val( e.target.result );\r\n          };\r\n        })(f);\r\n\r\n        // Read in the image file as a data URL.\r\n        reader.readAsText(f);\r\n    }\r\n\r\n    document.getElementById('upload').addEventListener('change', handleFileSelect, false);\r\n  </script> -->\r\n\r\n\r\n  <!-- <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx,.txt\">\r\n\r\n  <script>\r\n  function fileChange(event) {\r\n    let fileList: FileList = event.target.files;\r\n    if(fileList.length > 0) {\r\n        let file: File = fileList[0];\r\n        let formData:FormData = new FormData();\r\n        formData.append('uploadFile', file, file.name);\r\n        let headers = new Headers();\r\n        /** No need to include Content-Type in Angular 4 */\r\n        //headers.append('Content-Type', 'multipart/form-data');\r\n        headers.append('Accept', 'application/json');\r\n        let options = new RequestOptions({ headers: headers });\r\n        this.http.post(`${this.apiEndPoint}`, formData, options)\r\n            .map(res => res.json())\r\n            .catch(error => Observable.throw(error))\r\n            .subscribe(\r\n                data => console.log('success'),\r\n                error => console.log(error)\r\n            )\r\n    }\r\n  }\r\n  </script> -->\r\n</div>\r\n\r\n<!--This command displays material from the calling component-->\r\n<ng-content></ng-content>\r\n<!-- property binding -->\r\n<br />\r\n<br />\r\n<br />\r\n<p>\r\n  <input value=\"{{myString}}\" />\r\n  <input required=\"{{myBoolean}}\" />\r\n  <button (click)=\"alertMe()\">Click me</button>\r\n</p>\r\n<label>Name:</label>\r\n<input [(ngModel)]=\"file2.name\" />\r\n<p>{{file2.name}}</p>\r\n<label>Body:</label>\r\n<input [(ngModel)]=\"file2.body\" />\r\n<p>{{file2.body}}</p>\r\n<div></div>\r\n<br />\r\n<!-- <h1>Testing custom binding using @Input.</h1>\r\n<p>{{file.name}}</p>\r\n<p>{{file.body}}</p>\r\n<br /> -->\r\n<h1>Testing custom binding using @Output.</h1>\r\n<button (click)=\"fireYellEvent($event)\">Click to call yell function.</button>\r\n<p></p>\r\n<br />\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.homeTitle = "Welcome to the homepage (file upload)!";
        this.myString = "Testing";
        this.myBoolean = false;
        this.onYell = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.file2 = {
            name: "filename",
            body: "This is the body of the file."
        };
        this.fileString;
    }
    HomeComponent.prototype.alertMe = function () {
        alert('Testing alert!');
    };
    HomeComponent.prototype.fireYellEvent = function (e) {
        this.onYell.emit(e);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    HomeComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var output = [];
        for (var i = 0, f; f = inputValue.files[i]; i++) {
            output.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ') - ', f.size, ' bytes, last modified: ', f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a', '</li>');
        }
        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            // you can perform an action with readed data here
            console.log(myReader.result);
            _this.fileString = myReader.result;
            console.log(_this.fileString);
            // Both below methods work.
            //(<HTMLInputElement>document.getElementById( 'ms_word_filtered_html')).value = this.fileString;
            document.getElementById('ms_word_filtered_html').innerText = _this.fileString;
        };
        myReader.readAsText(file);
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], HomeComponent.prototype, "file", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], HomeComponent.prototype, "onYell", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.


/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map