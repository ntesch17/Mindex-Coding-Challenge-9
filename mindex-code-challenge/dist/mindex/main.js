(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n<h1 class=\"page-title\">Mindex Coding Challenge</h1>\n<app-employee-list></app-employee-list>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dialog/employee-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dialog/employee-dialog.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"employee\">\r\n    <div *ngIf=\"dialogType == 'edit'\">\r\n        <h1 mat-dialog-title>Compensation</h1>\r\n        <div mat-dialog-content>\r\n            <mat-form-field>\r\n                <mat-label>First Name</mat-label>\r\n                <input matInput disabled value={{employee.firstName}}>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-label>Last Name</mat-label>\r\n                <input matInput disabled value={{employee.lastName}}>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-label>Position</mat-label>\r\n                <input matInput disabled value={{employee.position}}>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-label>Compensation</mat-label>\r\n                <input matInput type=\"number\" required placeholder=\"$ ...\" [(ngModel)]=\"employee.compensation\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n            <button mat-flat-button color=\"primary\" [mat-dialog-close]=\"employee\">Save</button>\r\n            <button mat-stroked-button (click)=\"onCancelClick()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"dialogType == 'delete'\">\r\n        <h1 mat-dialog-title>Delete a Direct Report</h1>\r\n        <div mat-dialog-content>\r\n            <p>Permanently delete a direct report for \"{{employee.firstName}} {{employee.lastName}}\"?</p>\r\n            <p><strong>This action cannot be undone.</strong></p>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n            <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"employee\">Confirm</button>\r\n            <button mat-stroked-button (click)=\"onCancelClick()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list class=\"employee-list\" cols=\"2\">\r\n    <mat-grid-tile *ngFor=\"let employ of employees\">\r\n        <app-employee [employee]=\"employ\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\"></app-employee>\r\n    </mat-grid-tile>\r\n</mat-grid-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"employee\">\r\n\r\n    <div class=\"employeeHeader\">\r\n        <h1 class=\"employeeTitle\">{{employee.firstName}} {{employee.lastName}}</h1>\r\n        <h2 class=\"employeeSubtitle\">{{employee.position}}</h2>\r\n    </div>\r\n\r\n    <mat-card-content>\r\n        <ng-container *ngIf=\"employeesThatReport?.length > 0; else elseBlock\">\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>Direct Reports ({{employeesThatReport?.length || '0'}})</mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <ng-container *ngIf=\"employeesThatReport?.length > 0\">\r\n                    <table>\r\n                        <thead>\r\n                            <tr>\r\n                                <th colspan=\"2\">Employee</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let employ of employeesThatReport\">\r\n                                <td>{{employ.firstName}} {{employ.lastName}}</td>\r\n                                <td>\r\n                                    <button mat-icon-button title=\"Edit Employee's Compensation\" (click)=\"editClick(employ)\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                                    <button mat-icon-button title=\"Delete report\" (click)=\"deleteClick(employ)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </ng-container>\r\n            </mat-expansion-panel>\r\n        </ng-container>\r\n        <ng-template #elseBlock>\r\n            <mat-expansion-panel disabled>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>Direct Reports (0)</mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n            </mat-expansion-panel>\r\n        </ng-template>\r\n    </mat-card-content>\r\n\r\n    <mat-card-footer>\r\n        <span>Employee ID: {{employee.id}}</span>\r\n    </mat-card-footer>\r\n\r\n</mat-card>\r\n\r\n<app-employee-dialog></app-employee-dialog>");

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    font-family: sans-serif;\r\n}\r\n\r\nhtml {\r\n    background-color: aliceblue;\r\n}\r\n\r\n.page-title {\r\n    text-align: center;\r\n    font-size: 60px;\r\n    color: blue;\r\n    margin: 8px 0 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIG1hcmdpbjogOHB4IDAgNHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var angular_in_memory_web_api_1 = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var backendless_mock_service_1 = __webpack_require__(/*! ./backendless-mock.service */ "./src/app/backendless-mock.service.ts");
var employee_component_1 = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var employee_list_component_1 = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var employee_service_1 = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var list_1 = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
var divider_1 = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/divider.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var employee_dialog_component_1 = __webpack_require__(/*! ./employee-dialog/employee-dialog.component */ "./src/app/employee-dialog/employee-dialog.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeComponent,
                employee_list_component_1.EmployeeListComponent,
                employee_dialog_component_1.EmployeeDialogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(backendless_mock_service_1.BackendlessMockService, {
                    apiBase: 'api/',
                    delay: 250,
                    passThruUnknownUrl: true,
                    post204: false,
                    put204: false
                }),
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                divider_1.MatDividerModule,
                list_1.MatListModule,
                dialog_1.MatDialogModule,
            ],
            providers: [
                { provide: employee_dialog_component_1.EmployeeDialogComponent, useValue: {} },
                { provide: dialog_1.MatDialogRef, useValue: {} },
                { provide: dialog_1.MAT_DIALOG_DATA, useValue: {} },
                employee_service_1.EmployeeService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/backendless-mock.service.ts":
/*!*********************************************!*\
  !*** ./src/app/backendless-mock.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BackendlessMockService = /** @class */ (function () {
    function BackendlessMockService() {
    }
    BackendlessMockService.prototype.createDb = function () {
        var employees = [
            {
                id: 1,
                firstName: 'Brian',
                lastName: 'McGee',
                position: 'CEO',
                directReports: [2, 3]
            },
            {
                id: 2,
                firstName: 'Homer',
                lastName: 'Thompson',
                position: 'Dev Manager',
                directReports: [4]
            },
            {
                id: 3,
                firstName: 'Rock',
                lastName: 'Strongo',
                position: 'Lead Tester'
            },
            {
                id: 4,
                firstName: 'Max',
                lastName: 'Power',
                position: 'Junior Software Engineer'
            }
        ];
        return { employees: employees };
    };
    return BackendlessMockService;
}());
exports.BackendlessMockService = BackendlessMockService;


/***/ }),

/***/ "./src/app/employee-dialog/employee-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-dialog/employee-dialog.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-title {\r\n    color: #1976d2;\r\n    text-transform: uppercase;\r\n    font-size: 1.5rem;\r\n    margin: 0 0 8px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\np {\r\n    font-family: sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZGlhbG9nL2VtcGxveWVlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWRpYWxvZy9lbXBsb3llZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgOHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/employee-dialog/employee-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-dialog/employee-dialog.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var EmployeeDialogComponent = /** @class */ (function () {
    function EmployeeDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogType = "";
        this.dialogType = data.type;
        this.employee = data.employee;
    }
    EmployeeDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    EmployeeDialogComponent.ctorParameters = function () { return [
        { type: dialog_1.MatDialogRef },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
    ]; };
    EmployeeDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dialog/employee-dialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-dialog.component.css */ "./src/app/employee-dialog/employee-dialog.component.css")).default]
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], EmployeeDialogComponent);
    return EmployeeDialogComponent;
}());
exports.EmployeeDialogComponent = EmployeeDialogComponent;


/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-employee {\r\n    top: 10px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    position: absolute;\r\n    align-content: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n\r\n.employee-list {\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1lbXBsb3llZSB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmVtcGxveWVlLWxpc3Qge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService
            .getAll()
            .subscribe(function (emps) { return _this.employees = emps.sort(function (a, b) { return a.firstName > b.firstName ? 1 : -1; }); });
    };
    // Calls service to save edits for given employee.
    EmployeeListComponent.prototype.onEdit = function (employ) {
        this.employeeService.save(employ).subscribe();
    };
    // Calls service to remove employee from given database.
    EmployeeListComponent.prototype.onDelete = function (employ) {
        // Tell DB service to remove employee.
        this.employeeService.remove(employ).subscribe();
        //filter out removed employee from direct reports and overall list from the client-side.
        this.employees = this.employees
            .map(function (e) {
            var _a, _b;
            if (e.directReports !== undefined) {
                e.directReports = (_a = e.directReports) === null || _a === void 0 ? void 0 : _a.filter(function (id) { return id !== employ.id; });
                // If directReports is empty, remove property entirely.
                if (((_b = e.directReports) === null || _b === void 0 ? void 0 : _b.length) < 1) {
                    delete (e.directReports);
                }
            }
            return e;
        })
            .filter(function (e) { return e.id !== employ.id; });
    };
    EmployeeListComponent.prototype.handleError = function (e) {
        console.error(e);
        return this.errorMessage = e.message || 'Unable to retrieve employees';
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService }
    ]; };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = '/api/employees';
    }
    EmployeeService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.save = function (employ) {
        var response = (!!employ.id) ? this.put(employ) : this.post(employ);
        return response.pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.remove = function (employ) {
        return this.http
            .delete(this.url + "/" + employ.id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.post = function (employ) {
        return this.http.post(this.url, employ);
    };
    EmployeeService.prototype.put = function (employ) {
        return this.http.put(this.url + "/" + employ.id, employ);
    };
    EmployeeService.prototype.handleError = function (res) {
        return rxjs_1.throwError(res.error || 'Server error');
    };
    EmployeeService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card-content {\r\n    height: 100px;\r\n}\r\n\r\n.employeeHeader .employeeTitle {\r\n    margin: 0 0 4px;\r\n    font-size: 1.0rem;\r\n    font-weight: 400;\r\n    color: #1976d2\r\n}\r\n\r\n.employeeHeader .employeeSubtitle {\r\n    margin: 0 0 0 0px;\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #aaa;\r\n}\r\n\r\n.mat-card-footer {\r\n    padding: 16px;\r\n}\r\n\r\n.mat-card-footer span {\r\n    color: #aaa;\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.employee table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.employee table thead tr th {\r\n    background-color: #2196f3;\r\n    color: #fff;\r\n    height: 10px;\r\n    padding: 8px;\r\n    text-align: left;\r\n    font-weight: 500;\r\n}\r\n\r\n.employee table tbody tr:nth-of-type(even) {\r\n    background-color: #eee;\r\n    height: 20px;\r\n}\r\n\r\n.employee table tbody tr td:nth-of-type(1) {\r\n    padding: 2px 0px;\r\n    height: 20px;\r\n}\r\n\r\n.employee table tbody tr td:nth-of-type(2) {\r\n    float: right;\r\n    height: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmVtcGxveWVlSGVhZGVyIC5lbXBsb3llZVRpdGxlIHtcclxuICAgIG1hcmdpbjogMCAwIDRweDtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMTk3NmQyXHJcbn1cclxuXHJcbi5lbXBsb3llZUhlYWRlciAuZW1wbG95ZWVTdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtZm9vdGVyIHNwYW4ge1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5lbXBsb3llZSB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5lbXBsb3llZSB0YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmVtcGxveWVlIHRhYmxlIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZSB0YWJsZSB0Ym9keSB0ciB0ZDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBwYWRkaW5nOiAycHggMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUgdGFibGUgdGJvZHkgdHIgdGQ6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var employee_dialog_component_1 = __webpack_require__(/*! ../employee-dialog/employee-dialog.component */ "./src/app/employee-dialog/employee-dialog.component.ts");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, dialog) {
        this.employeeService = employeeService;
        this.dialog = dialog;
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.employeesThatReport = [];
    }
    // When component is intialization
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If directReports exist, get the employee info for each.
        if (this.employee.directReports !== undefined) {
            this.employee.directReports.forEach(function (employeeId) {
                _this.employeeService.get(employeeId).subscribe(function (employ) { return _this.employeesThatReport.push(employ); });
            });
        }
    };
    // When edit button is pressed, emit edit to Employee List (Add Edit).
    EmployeeComponent.prototype.editClick = function (employ) {
        var _this = this;
        var dialogRef = this.dialog.open(employee_dialog_component_1.EmployeeDialogComponent, {
            width: '500px',
            data: {
                employee: employ,
                type: 'edit',
            },
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data !== undefined) {
                _this.edit.emit(data);
            }
        });
    };
    // When delete button is pressed, emit delete to Employee List (Delete Employee).
    EmployeeComponent.prototype.deleteClick = function (employ) {
        var _this = this;
        var dialogRef = this.dialog.open(employee_dialog_component_1.EmployeeDialogComponent, {
            width: '500px',
            data: {
                employee: employ,
                type: 'delete',
            },
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data !== undefined) {
                _this.delete.emit(employ);
            }
        });
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService },
        { type: dialog_1.MatDialog }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], EmployeeComponent.prototype, "employee", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeComponent.prototype, "edit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeComponent.prototype, "delete", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, dialog_1.MatDialog])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\mindex-js-code-challenge\mindex-js-code-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map