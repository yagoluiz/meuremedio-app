webpackJsonp([5],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pesquisa/pesquisa.module": [
		280,
		4
	],
	"../pages/remedio-detalhes/remedio-detalhes.module": [
		281,
		3
	],
	"../pages/sobre/sobre.module": [
		282,
		2
	],
	"../pages/tabs/tabs.module": [
		283,
		1
	],
	"../pages/tutorial/tutorial.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemediosMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_remedio_mock__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemediosMock = /** @class */ (function () {
    function RemediosMock() {
        this.remedios = [];
        this.default = {
            "id": 1,
            "nome": "FILINAR G",
            "principioAtivo": "ACEBROFILINA",
            "apresentacao": "5 MG/ML GEL OR CT FR PLAS INC X 120ML + COL MED",
            "classeTerapeutica": "R05C0 - EXPECTORANTES",
            "tipo": "Novo (Referência)",
            "restricaoHospitalar": false,
            "tarja": "Tarja Vermelha",
            "precoFabrica": 11.85,
            "precoMaximo": 20.47,
            "laboratorioNome": "EUROFARMA LABORATÓRIOS S.A.",
            "laboratorioCnpj": "61.190.096/0001-92",
            "laboratorioRegistro": "EUROFARMA LABORATÓRIOS S.A."
        };
        var remedios = [{
                "id": 1,
                "nome": "FILINAR G",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "5 MG/ML GEL OR CT FR PLAS INC X 120ML + COL MED",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Novo (Referência)",
                "restricaoHospitalar": false,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 11.85,
                "precoMaximo": 20.47,
                "laboratorioNome": "EUROFARMA LABORATÓRIOS S.A.",
                "laboratorioCnpj": "61.190.096/0001-92",
                "laboratorioRegistro": "EUROFARMA LABORATÓRIOS S.A."
            }, {
                "id": 2,
                "nome": "ACEBROFILINA",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CT FR PLAS AMB X 120 ML + CP MED",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Genérico",
                "restricaoHospitalar": false,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 15.70,
                "precoMaximo": 27.14,
                "laboratorioNome": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA",
                "laboratorioCnpj": "02.814.497/0001-07",
                "laboratorioRegistro": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA"
            }, {
                "id": 3,
                "nome": "ACEBROFILINA",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CX 50 FR PLAS AMB X 120 ML + 50 CP MED (EMB HOSP)",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Genérico",
                "restricaoHospitalar": true,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 579.85,
                "precoMaximo": 0.00,
                "laboratorioNome": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA",
                "laboratorioCnpj": "02.814.497/0001-07",
                "laboratorioRegistro": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA"
            }, {
                "id": 4,
                "nome": "BRONTEK",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CT FR PEAD X 120 ML + CP MED",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Similar",
                "restricaoHospitalar": false,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 22.94,
                "precoMaximo": 39.63,
                "laboratorioNome": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A",
                "laboratorioCnpj": "03.485.572/0001-04",
                "laboratorioRegistro": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A"
            }, {
                "id": 5,
                "nome": "BRONTEK",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CX 60 FR PEAD X 120 ML + 60 CP MED (EMB HOSP)",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Similar",
                "restricaoHospitalar": true,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 1202.68,
                "precoMaximo": 0.00,
                "laboratorioNome": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A",
                "laboratorioCnpj": "03.485.572/0001-04",
                "laboratorioRegistro": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A"
            }];
        for (var _i = 0, remedios_1 = remedios; _i < remedios_1.length; _i++) {
            var remedio = remedios_1[_i];
            this.remedios.push(new __WEBPACK_IMPORTED_MODULE_1__models_remedio_mock__["a" /* RemedioMock */](remedio));
        }
    }
    RemediosMock.prototype.query = function (params) {
        if (!params) {
            return this.remedios;
        }
        return this.remedios.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    RemediosMock.prototype.add = function (remedio) {
        this.remedios.push(remedio);
    };
    RemediosMock.prototype.delete = function (remedio) {
        this.remedios.splice(this.remedios.indexOf(remedio), 1);
    };
    RemediosMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RemediosMock);
    return RemediosMock;
}());

//# sourceMappingURL=remedios-mock.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
var FirstRunPage = 'TutorialPage';
var MainPage = 'TabsPage';
var Tab1Root = 'PesquisaPage';
var Tab2Root = 'SobrePage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemedioApi = /** @class */ (function () {
    function RemedioApi(http) {
        this.http = http;
        this.API_URL = 'http://ec2-18-188-196-175.us-east-2.compute.amazonaws.com:8080/api/';
        this.remedios = [];
    }
    RemedioApi.prototype.getByNome = function (remedio) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'consulta' + '/' + remedio;
            _this.http.get(url)
                .subscribe(function (result) {
                _this.remedios = result;
                resolve(_this.remedios);
            }, function (error) {
                reject(error);
                console.log(error);
            });
        });
    };
    RemedioApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RemedioApi);
    return RemedioApi;
}());

//# sourceMappingURL=remedio.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mocks_providers_remedios_mock__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/pesquisa/pesquisa.module#PesquisaPageModule', name: 'PesquisaPage', segment: 'pesquisa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remedio-detalhes/remedio-detalhes.module#RemedioDetalhesPageModule', name: 'RemedioDetalhesPage', segment: 'remedio-detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["a" /* RemedioApi */],
                __WEBPACK_IMPORTED_MODULE_7__mocks_providers_remedios_mock__["a" /* RemediosMock */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_remedio__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_remedios_mock__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_remedio__["a"]; });
/* unused harmony reexport RemediosMock */



//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioMock; });
var RemedioMock = /** @class */ (function () {
    function RemedioMock(fields) {
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return RemedioMock;
}());

//# sourceMappingURL=remedio-mock.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Pesquisar', component: 'TabsPage' },
            { title: 'Sobre', component: 'SobrePage' }
        ];
        platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"true\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map