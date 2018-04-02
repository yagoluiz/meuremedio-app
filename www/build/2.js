webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemedioDetalhesPageModule", function() { return RemedioDetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remedio_detalhes__ = __webpack_require__(287);
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_google_analytics__ = __webpack_require__(285);
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
            selector: 'page-remedio-detalhes',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Informações</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<!--   <div class="item-detalhes" padding> -->\n\n<!--     <h2><strong>{{remedio.nome}}</strong></h2> -->\n\n<!--     <p> -->\n\n<!--       <strong>Tarja: </strong>{{remedio.tarja}}</p> -->\n\n<!--     <p> -->\n\n<!--       <strong>Laboratório: </strong>{{remedio.laboratorioNome}}</p> -->\n\n<!--     <p> -->\n\n<!--       <strong>Princípio ativo: </strong>{{remedio.principioAtivo}}</p> -->\n\n<!--     <p> -->\n\n<!--       <strong>Descrição: </strong>{{remedio.apresentacao}}</p> -->\n\n<!--     <p> -->\n\n<!--       <strong>Classe terapêutica: </strong>{{remedio.classeTerapeutica}}</p> -->\n\n<!--     <p> -->\n\n<!--       <strong>Tipo: </strong>{{remedio.tipo}}</p> -->\n\n<!--     <p> -->\n\n<!--       <strong>Preço máximo farmácia: </strong>R$ {{remedio.precoFabrica}}</p> -->\n\n<!--     <p> -->\n\n<!--       <strong>Preço máximo consumidor: </strong>R$ {{remedio.precoConsumidor20}}</p> -->\n\n<!--   </div> -->\n\n  \n\n	<ion-card>\n\n   		<ion-card-header>\n\n    		<h2><strong>{{remedio.nome}}</strong></h2>\n\n    		<p>{{remedio.apresentacao}}</p>\n\n  	</ion-card-header>\n\n  \n\n  	<ion-grid>\n\n  		<ion-row>\n\n    		<ion-col col-12>\n\n    			<ion-row>\n\n    				<ion-col col-2><strong>Classe terapêutica: </strong></ion-col>\n\n    				<ion-col col-10><p>{{remedio.classeTerapeutica}}</p></ion-col>\n\n    			</ion-row>\n\n    			<ion-row>\n\n    				<ion-col col-2><strong>Princípio ativo: </strong></ion-col>\n\n    				<ion-col col-10><p>{{remedio.principioAtivo}}</p></ion-col>\n\n    			</ion-row>\n\n    			<ion-row>\n\n    				<ion-col col-2><strong>Laboratório: </strong></ion-col>\n\n    				<ion-col col-10><p>{{remedio.laboratorioNome}}</p></ion-col>\n\n    			</ion-row>\n\n		    	<ion-row>\n\n    				<ion-col col-6><strong>CNPJ: </strong>{{remedio.laboratorioCnpj}}</ion-col>\n\n    				<ion-col col-6><strong>Registro: </strong>{{remedio.laboratorioRegistro}}</ion-col>\n\n    			</ion-row>  \n\n    			<ion-row>\n\n    				<ion-col col-4><strong>Tipo: </strong>{{remedio.tipo}}</ion-col>\n\n    				<ion-col col-4>{{remedio.restricaoHospitalarStr}}</ion-col>\n\n    				<ion-col col-4>{{remedio.tarja}}</ion-col>\n\n    			</ion-row> 	\n\n    		</ion-col>\n\n<!--     		<ion-col col-2> -->\n\n<!--     			<ion-row><ion-col>PF: {{remedio.precoFabrica}}</ion-col></ion-row> -->\n\n<!--     			<ion-row><ion-col>P00: {{remedio.precoConsumidor0}}</ion-col></ion-row> -->\n\n<!--     			<ion-row><ion-col>P12: {{remedio.precoConsumidor12}}</ion-col></ion-row> -->\n\n<!--     			<ion-row><ion-col>P17: {{remedio.precoConsumidor17}}</ion-col></ion-row> -->\n\n<!--     			<ion-row><ion-col>P20: {{remedio.precoConsumidor20}}</ion-col></ion-row> -->\n\n<!--     		</ion-col> -->\n\n  		</ion-row>\n\n		<ion-row><ion-col>PF: {{remedio.precoFabrica}}</ion-col></ion-row>\n\n    	<ion-row><ion-col>P00: {{remedio.precoConsumidor0}}</ion-col></ion-row>\n\n    	<ion-row><ion-col>P12: {{remedio.precoConsumidor12}}</ion-col></ion-row>\n\n    	<ion-row><ion-col>P17: {{remedio.precoConsumidor17}}</ion-col></ion-row>\n\n    	<ion-row><ion-col>P20: {{remedio.precoConsumidor20}}</ion-col></ion-row>\n\n	</ion-grid>\n\n	\n\n</ion-card>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/
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