"use strict";
(self["webpackChunkcov_recommendations"] = self["webpackChunkcov_recommendations"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_component_version_component_version_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component-version/component-version.component */ 2177);





class AppComponent {
  constructor(activatedRoute, mPage) {
    this.activatedRoute = activatedRoute;
    this.mPage = mPage;
  }
  ngOnInit() {
    // Grab any parameters in the URL (Used in Cerner Components)
    this.activatedRoute.queryParams.subscribe(params => {
      this.mPage.personId = params['personId'] ? parseInt(params['personId']) : this.mPage.personId;
      this.mPage.encntrId = params['encounterId'] ? parseInt(params['encounterId']) : this.mPage.encntrId;
      this.mPage.prsnlId = params['userId'] ? parseInt(params['userId']) : this.mPage.prsnlId;
    });
    // Perform MPage Initialization
    setTimeout(e => {
      this.mPage.setMaxInstances(2, true, 'CHART', false);
      // Add your initialization code here - do not place outside setTimeout function
    }, 0);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_3__.mPageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_3__.mPageLogComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.activityLog = _t.first);
      }
    },
    decls: 4,
    vars: 1,
    consts: [[3, "displayInline"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Covenant Recommendations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mpage-log-component", 0)(3, "app-component-version");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayInline", true);
      }
    },
    dependencies: [_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_3__.mPageLogComponent, _components_component_version_component_version_component__WEBPACK_IMPORTED_MODULE_0__.ComponentVersionComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   CUSTOM_DATE_FORMATS: () => (/* binding */ CUSTOM_DATE_FORMATS),
/* harmony export */   configFactory: () => (/* binding */ configFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-luxon-adapter */ 9640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ 7164);
/* harmony import */ var _components_component_version_component_version_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/component-version/component-version.component */ 2177);












const configFactory = configService => {
  return () => configService.loadConfig();
};
// Custom date formats
const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: ['dd-MMM-yyyy']
  },
  display: {
    dateInput: 'dd-MMM-yyyy',
    dateTimeLabel: 'dd-MMM-yyyy HH:mm',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy'
  }
};
class AppModule {
  constructor(injector) {
    this.injector = injector;
  }
  ngDoBootstrap() {
    const element = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_3__.createCustomElement)(_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
      injector: this.injector
    });
    if (!customElements.get('cov-recommendations')) {
      customElements.define('cov-recommendations', element);
    }
  }
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.APP_INITIALIZER,
      useFactory: configFactory,
      deps: [_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_5__.ConfigService],
      multi: true
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler,
      useClass: _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandlerService
    }, {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.DateAdapter,
      useClass: _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_7__.LuxonDateAdapter,
      deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE]
    },
    //    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_FORMATS,
      useValue: CUSTOM_DATE_FORMATS
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_5__.ClinicalOfficeMpageModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_7__.MatLuxonDateModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_component_version_component_version_component__WEBPACK_IMPORTED_MODULE_2__.ComponentVersionComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_5__.ClinicalOfficeMpageModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_7__.MatLuxonDateModule]
  });
})();

/***/ }),

/***/ 2177:
/*!*****************************************************************************!*\
  !*** ./src/app/components/component-version/component-version.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentVersionComponent: () => (/* binding */ ComponentVersionComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ComponentVersionComponent {
  constructor() {
    this.currentApplicationVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ComponentVersionComponent_Factory(t) {
    return new (t || ComponentVersionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ComponentVersionComponent,
    selectors: [["app-component-version"]],
    decls: 2,
    vars: 1,
    consts: [[1, "opacity-25"]],
    template: function ComponentVersionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("v", ctx.currentApplicationVersion, "");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  appVersion: (__webpack_require__(/*! ../../package.json */ 4147).version),
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"cov-recommendations","version":"0.0.1","scripts":{"ng":"ng","start":"ng serve","prebuild":"npm --no-git-tag-version version patch","build":"ng build --configuration production && node concat.js","watch":"ng build --watch --configuration development","test":"ng test"},"private":true,"dependencies":{"@angular/animations":"^16.0.0","@angular/cdk":"^16.0.0","@angular/common":"^16.0.0","@angular/compiler":"^16.0.0","@angular/core":"^16.0.0","@angular/elements":"^16.0.0","@angular/forms":"^16.0.0","@angular/material":"^16.0.0","@angular/material-luxon-adapter":"^16.0.0","@angular/platform-browser":"^16.0.0","@angular/platform-browser-dynamic":"^16.0.0","@angular/router":"^16.0.0","@clinicaloffice/clinical-office-mpage-core":">=0.0.1","fast-sort":"^3.4.0","install":"^0.13.0","luxon":"^3.3.0","npm":"^10.7.0","rxjs":"~7.8.0","tslib":"^2.3.0","zone.js":"~0.13.0"},"devDependencies":{"@angular-devkit/build-angular":"^16.0.2","@angular/cli":"~16.0.2","@angular/compiler-cli":"^16.0.0","@types/jasmine":"~4.3.0","@types/luxon":"^3.3.0","@types/node":"^20.11.30","concat":"^1.0.3","fs-extra":"^11.1.1","jasmine-core":"~4.6.0","karma":"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","ng-packagr":"^16.0.1","typescript":"~5.0.2"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map