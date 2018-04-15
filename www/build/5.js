webpackJsonp([5],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaPageModule", function() { return PesquisaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisa__ = __webpack_require__(296);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pesquisa__["a" /* PesquisaPage */])
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

/***/ 291:
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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_remedio__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alerta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_google_analytics__ = __webpack_require__(291);
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
    function PesquisaPage(navCtrl, navParams, loadingCtrl, remedioApi, alerta) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.remedioApi = remedioApi;
        this.alerta = alerta;
        this.remedios = [];
        this.remedio = null;
        this.remedioQtd = 0;
        __WEBPACK_IMPORTED_MODULE_5__app_google_analytics__["a" /* GoogleAnalytics */].sendPageViewForPage('/pesquisa');
    }
    PesquisaPage.prototype.buscarRemedio = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_5__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "Pesquisa:Buscar:Remedio");
                        this.remedioQtd = 0;
                        this.remedio = ev.target.value;
                        if (!this.remedio || !this.remedio.trim() || this.remedio.length < 3) {
                            this.remedios = [];
                            return [2 /*return*/];
                        }
                        loading = this.loadingCtrl.create({
                            content: 'Carregando...'
                        });
                        loading.present();
                        return [4 /*yield*/, this.remedioApi.getByNome(this.remedio).then(function (result) {
                                if (result.length > 0) {
                                    _this.remedios = result.slice(0, 10);
                                    loading.dismiss();
                                }
                                else {
                                    loading.dismiss();
                                    _this.alerta.create('Ooops! Nenhum remédio encontrado!');
                                }
                            }).catch(function (error) {
                                loading.dismiss();
                                _this.alerta.create('Ooops! Erro ao listar remédios!');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PesquisaPage.prototype.carregarRemedio = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.remedioQtd++;
                        return [4 /*yield*/, this.remedioApi.getByNome(this.remedio).then(function (result) {
                                _this.remedios = result.slice(0, 20 * _this.remedioQtd);
                            }).catch(function (error) {
                                _this.alerta.create('Ooops! Erro ao listar remédios!');
                            })];
                    case 1:
                        _a.sent();
                        ev.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    PesquisaPage.prototype.cancelarPesquisa = function (ev) {
        this.remedios = [];
        return;
    };
    PesquisaPage.prototype.abrirRemedio = function (remedio) {
        __WEBPACK_IMPORTED_MODULE_5__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "Pesquisa:Abrir:Remedio");
        this.navCtrl.push('RemedioDetalhesPage', {
            remedio: remedio
        });
    };
    PesquisaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pesquisa',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\pesquisa\pesquisa.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Pesquisa</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-searchbar (ionInput)="buscarRemedio($event)" (ionCancel)="cancelarPesquisa($event)" [showCancelButton]="true" cancelButtonText="Cancelar"\n\n	 placeholder="Mínimo 3 caracteres" text-wrap></ion-searchbar>\n\n	<ion-list>\n\n		<button ion-item (click)="abrirRemedio(remedio)" *ngFor="let remedio of remedios">\n\n			<ion-icon name="information-circle" [ngClass]="{\n\n				\'tarja-verde\': remedio.tarja === \'Venda Livre\',\n\n				\'tarja-vermelha\': remedio.tarja === \'Tarja Vermelha\',\n\n				\'tarja-preta\': remedio.tarja === \'Tarja Preta\'}" item-start>\n\n			</ion-icon>\n\n			<h2 text-wrap>{{remedio.nome}}</h2>\n\n			<p text-wrap>{{remedio.principioAtivo}}</p>\n\n			<p text-wrap>{{remedio.apresentacao}}</p>\n\n		</button>\n\n	</ion-list>\n\n	<ion-infinite-scroll (ionInfinite)="carregarRemedio($event)">\n\n		<ion-infinite-scroll-content loadingText="Carregando..."></ion-infinite-scroll-content>\n\n	</ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\pesquisa\pesquisa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_remedio__["a" /* RemedioApi */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alerta__["a" /* Alerta */]])
    ], PesquisaPage);
    return PesquisaPage;
}());

//# sourceMappingURL=pesquisa.js.map

/***/ })

});
//# sourceMappingURL=5.js.map