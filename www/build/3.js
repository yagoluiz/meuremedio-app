webpackJsonp([3],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaPageModule", function() { return PesquisaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisa__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PesquisaPageModule = /** @class */ (function () {
    function PesquisaPageModule() {
    }
    PesquisaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pesquisa__["a" /* PesquisaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pesquisa__["a" /* PesquisaPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pesquisa__["a" /* PesquisaPage */]
            ]
        })
    ], PesquisaPageModule);
    return PesquisaPageModule;
}());

//# sourceMappingURL=pesquisa.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalytics; });
var GoogleAnalytics = /** @class */ (function () {
    function GoogleAnalytics() {
    }
    GoogleAnalytics.googleAnalytics = function () {
        var fields = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fields[_i] = arguments[_i];
        }
        (_a = window).ga.apply(_a, fields);
        var _a;
    };
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications?hl=pt-br
    GoogleAnalytics.sendPageViewForPage = function (nomePage) {
        GoogleAnalytics.googleAnalytics('set', 'page', nomePage);
        GoogleAnalytics.googleAnalytics('send', 'pageview');
    };
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/events?hl=pt-br
    GoogleAnalytics.sendEvent = function (eventCategory, eventAction, eventLabel) {
        if (eventLabel === void 0) { eventLabel = ''; }
        GoogleAnalytics.googleAnalytics('send', {
            hitType: 'event',
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel
        });
    };
    return GoogleAnalytics;
}());

//# sourceMappingURL=google-analytics.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_remedio__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_google_analytics__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PesquisaPage = /** @class */ (function () {
    function PesquisaPage(navCtrl, navParams, loadingCtrl, toastCtrl, remedioApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.remedioApi = remedioApi;
        this.remedios = [];
        __WEBPACK_IMPORTED_MODULE_3__app_google_analytics__["a" /* GoogleAnalytics */].sendPageViewForPage('/pesquisa');
    }
    PesquisaPage.prototype.buscarRemedio = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var remedio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_3__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "Pesquisa:Buscar:Remedio");
                        remedio = ev.target.value;
                        if (!remedio || !remedio.trim()) {
                            this.remedios = [];
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.remedioApi.getByNome(remedio).then(function (result) {
                                _this.inserirLoading();
                                _this.remedios = result;
                            }).catch(function (error) {
                                _this.inserirMensagem('Ooops! Erro ao listar remédio.');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PesquisaPage.prototype.abrirRemedio = function (remedio) {
        __WEBPACK_IMPORTED_MODULE_3__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "Pesquisa:Abrir:Remedio");
        this.navCtrl.push('RemedioDetalhesPage', {
            remedio: remedio
        });
    };
    PesquisaPage.prototype.inserirLoading = function () {
        return this.loadingCtrl.create({
            content: "Carregando...",
            duration: 3000
        }).present();
    };
    PesquisaPage.prototype.inserirMensagem = function (mensagem) {
        return this.toastCtrl.create({
            message: mensagem,
            position: 'top',
            duration: 3000
        }).present();
    };
    PesquisaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisa',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\pesquisa\pesquisa.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-title>Pesquisa</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-searchbar (ionInput)="buscarRemedio($event)" placeholder="Qual o nome do seu remédio?"></ion-searchbar>\n\n	<ion-list>\n\n		<ion-card (click)="abrirRemedio(remedio)" *ngFor="let remedio of remedios">\n\n			<ion-grid>\n\n				<ion-row>\n\n					<ion-col col-10>\n\n						<ion-row>\n\n							<ion-col col-12></ion-col>\n\n							<h2>{{remedio.nome}}</h2>\n\n						</ion-row>\n\n						<ion-row>\n\n							<ion-col col-12></ion-col>\n\n							<p>{{remedio.apresentacao}}</p>\n\n						</ion-row>\n\n						<ion-row>\n\n							<ion-col col-12></ion-col>\n\n							<p>{{remedio.laboratorioNome}}</p>\n\n						</ion-row>\n\n					</ion-col>\n\n					<ion-col col-2>\n\n						<ion-row justify-content-end>\n\n							<ion-col col-12></ion-col>\n\n							<p>\n\n								<strong>Máximo: </strong>R$ {{remedio.precoConsumidor20}}</p>\n\n						</ion-row>\n\n					</ion-col>\n\n				</ion-row>\n\n			</ion-grid>\n\n		</ion-card>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\pesquisa\pesquisa.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_remedio__["a" /* RemedioApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_remedio__["a" /* RemedioApi */]) === "function" && _e || Object])
    ], PesquisaPage);
    return PesquisaPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=pesquisa.js.map

/***/ })

});
//# sourceMappingURL=3.js.map