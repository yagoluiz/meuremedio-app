webpackJsonp([0],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
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


var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, menuCtrl, platform) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.sair = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
        this.slides = [
            {
                titulo: 'Bem-vindo ao meu remédio :)',
                descricao: 'O <b>meu remédio</b> é um app para consulta de medicamentos, desde de preços máximo que podem ser oferecidos pelo consumidar até informações detalhadas da medicação.',
                imagem: 'assets/img/ica-slidebox-img-1.png',
            },
            {
                titulo: 'Como usar o meu rémedio?',
                descricao: 'Pesquise o nome do rémedio desejado e o app irá trazer várias informações, além do preço máximo disponível ao consumidor. Bem fácil, não é mesmo?',
                imagem: 'assets/img/ica-slidebox-img-2.png',
            },
            {
                titulo: 'Como começar?',
                descricao: 'Comece agora! Entedeu tudo direitinho? Termine o tutorial e comece a usar o app já :)',
                imagem: 'assets/img/ica-slidebox-img-3.png',
            }
        ];
    }
    TutorialPage.prototype.iniciarApp = function () {
        this.navCtrl.setRoot('PesquisaPage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.verificarSlide = function (slider) {
        this.sair = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app-full\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n  <ion-navbar>\n    <ion-buttons end *ngIf="sair">\n      <button ion-button (click)="iniciarApp()" color="primary">Sair</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="verificarSlide($event)">\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.imagem" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="slide.titulo"></h2>\n      <p [innerHTML]="slide.descricao"></p>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n      <h2 class="slide-title">Tudo pronto?</h2>\n      <button ion-button icon-end large clear (click)="iniciarApp()">\n        Use o app agora\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app-full\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=0.js.map