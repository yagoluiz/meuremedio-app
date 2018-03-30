webpackJsonp([2],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaPageModule", function() { return PesquisaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisa__ = __webpack_require__(283);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_remedio__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesquisaPage = /** @class */ (function () {
    function PesquisaPage(navCtrl, navParams, loadingCtrl, toastCtrl, remedioApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.remedioApi = remedioApi;
        this.remedios = [];
    }
    PesquisaPage.prototype.buscarRemedio = function (ev) {
        var _this = this;
        var remedio = ev.target.value;
        if (!remedio || !remedio.trim()) {
            this.remedios = [];
            return;
        }
        this.remedioApi.getByNome(remedio).then(function (result) {
            _this.criarLoading();
            _this.remedios = result;
        }).catch(function (error) {
            _this.criarMensagem('Ooops! Erro ao listar o remédio.');
        });
    };
    PesquisaPage.prototype.abrirRemedio = function (remedio) {
        this.navCtrl.push('RemedioDetalhesPage', {
            remedio: remedio
        });
    };
    PesquisaPage.prototype.criarLoading = function () {
        return this.loadingCtrl.create({
            content: "Carregando...",
            duration: 3000
        }).present();
    };
    PesquisaPage.prototype.criarMensagem = function (mensagem) {
        return this.toastCtrl.create({
            message: mensagem,
            position: 'top',
            duration: 3000
        }).present();
    };
    PesquisaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app-full\src\pages\pesquisa\pesquisa.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Pesquisa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="buscarRemedio($event)" placeholder="Pesquise pelo nome do seu remédio"></ion-searchbar>\n  <ion-list>\n    <button ion-item (click)="abrirRemedio(remedio)" *ngFor="let remedio of remedios">\n      <h2>{{remedio.nome}}</h2>\n      <p>{{remedio.laboratorioNome}}</p>\n      <p>{{remedio.apresentacao}}</p>\n      <ion-note item-end *ngIf="remedio.tarja">{{remedio.tarja}}</ion-note>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app-full\src\pages\pesquisa\pesquisa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_remedio__["a" /* RemedioApi */]])
    ], PesquisaPage);
    return PesquisaPage;
}());

//# sourceMappingURL=pesquisa.js.map

/***/ })

});
//# sourceMappingURL=2.js.map