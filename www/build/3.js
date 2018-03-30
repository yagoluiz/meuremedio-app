webpackJsonp([3],{

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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
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
        this.remedio = navParams.get('remedio');
    }
    RemedioDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remedio-detalhes',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ remedio.nome }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="item-detalhes" padding>\n    <p>\n      <strong>Tarja: </strong>{{remedio.tarja}}</p>\n    <p>\n      <strong>Laboratório: </strong>{{remedio.laboratorioNome}}</p>\n    <p>\n      <strong>Princípio ativo: </strong>{{remedio.principioAtivo}}</p>\n    <p>\n      <strong>Descrição: </strong>{{remedio.apresentacao}}</p>\n    <p>\n      <strong>Classe terapêutica: </strong>{{remedio.classeTerapeutica}}</p>\n    <p>\n      <strong>Tipo: </strong>{{remedio.tipo}}</p>\n    <p>\n      <strong>Preço máximo farmácia: </strong>R$ {{remedio.precoFabrica}}</p>\n    <p>\n      <strong>Preço máximo consumidor: </strong>R$ {{remedio.precoMaximo}}</p>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RemedioDetalhesPage);
    return RemedioDetalhesPage;
}());

//# sourceMappingURL=remedio-detalhes.js.map

/***/ })

});
//# sourceMappingURL=3.js.map