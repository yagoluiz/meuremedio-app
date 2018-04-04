webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemedioDetalhesPageModule", function() { return RemedioDetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remedio_detalhes__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RemedioDetalhesPageModule = /** @class */ (function () {
    function RemedioDetalhesPageModule() {
    }
    RemedioDetalhesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__remedio_detalhes__["a" /* RemedioDetalhesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__remedio_detalhes__["a" /* RemedioDetalhesPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__remedio_detalhes__["a" /* RemedioDetalhesPage */]
            ]
        })
    ], RemedioDetalhesPageModule);
    return RemedioDetalhesPageModule;
}());

//# sourceMappingURL=remedio-detalhes.module.js.map

/***/ }),

/***/ 284:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_google_analytics__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemedioDetalhesPage = /** @class */ (function () {
    function RemedioDetalhesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        __WEBPACK_IMPORTED_MODULE_2__app_google_analytics__["a" /* GoogleAnalytics */].sendPageViewForPage('/remedio-detalhes');
        this.remedio = navParams.get('remedio');
    }
    RemedioDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remedio-detalhes',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-title>Informações</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-card>\n\n		<ion-list>\n\n			<ion-item [ngClass]="{\n\n					\'tarja-verde\': remedio.tarja === \'Venda Livre\',\n\n					\'tarja-vermelha\': remedio.tarja === \'Tarja Vermelha\',\n\n					\'tarja-preta\': remedio.tarja === \'Tarja Preta\'}">\n\n				<h2 class="texto-branco">\n\n					{{remedio.nome}}\n\n				</h2>\n\n				<p class="texto-branco">{{remedio.apresentacao}}</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-list class="preco-farmacia" padding>\n\n			<h2 class="texto-branco">Preço farmácia</h2>\n\n			<p class="texto-branco">R$ {{remedio.precoFabrica}}</p>\n\n		</ion-list>\n\n		<ion-list class="preco-consumidor" padding>\n\n			<h2 class="texto-branco">Preço consumidor</h2>\n\n			<p class="texto-branco">R$ {{remedio.precoConsumidor0}}</p>\n\n		</ion-list>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-list>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Princípio ativo</h2>\n\n				<p class="texto-cinza">{{remedio.principioAtivo}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-branco">\n\n				<h2 class="texto-preto">Classe terapeutica</h2>\n\n				<p class="texto-cinza">{{remedio.classeTerapeutica}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Laboratório</h2>\n\n				<p class="texto-cinza">{{remedio.laboratorioNome}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-branco">\n\n				<h2 class="texto-preto">CNPJ</h2>\n\n				<p class="texto-cinza">{{remedio.laboratorioCnpj}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Registro</h2>\n\n				<p class="texto-cinza">{{remedio.laboratorioRegistro}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-branco">\n\n				<h2 class="texto-preto">Tipo</h2>\n\n				<p class="texto-cinza">{{remedio.laboratorioRegistro}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Registro hospitalar</h2>\n\n				<p class="texto-cinza">{{remedio.restricaoHospitalarStr}}</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RemedioDetalhesPage);
    return RemedioDetalhesPage;
}());

//# sourceMappingURL=remedio-detalhes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map