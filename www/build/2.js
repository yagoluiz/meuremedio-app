webpackJsonp([2],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(299);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */])
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_google_analytics__ = __webpack_require__(291);
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
    function TutorialPage(navCtrl, menuCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.sair = false;
        this.dir = 'ltr';
        __WEBPACK_IMPORTED_MODULE_3__app_google_analytics__["a" /* GoogleAnalytics */].sendPageViewForPage('/tutorial');
        this.dir = platform.dir();
        this.slides = [
            {
                titulo: 'Bem-vindo ao meu remédio :)',
                descricao: 'O <strong>meu remédio</strong> é um aplicativo para consulta de preços de remédios. Aqui você encontra informações de preços máximos que podem ser oferecidos para o <strong>consumidor</strong>, preços máximos que as <strong>farmácias</strong> podem adquirir o remédio das fábricas e detalhes sobre o remédio.',
                imagem: 'assets/img/logo-original.png',
            },
            {
                titulo: 'Como usar o meu remédio?',
                descricao: 'Como no exemplo acima, pesquise o <strong>nome</strong> do remédio desejado para consultar as informações. A <strong>cor</strong> ao lado indicará a tarja do remédio. Bem fácil, não é mesmo?',
                imagem: 'assets/img/pagina-pesquisa.png',
            },
            {
                titulo: 'Denuncie preços ilegais!',
                descricao: 'Após selecionar um <strong>remédio</strong>, você encontra informações e o preço de acordo com o <strong>ICMS (Imposto Sobre Circulação de Mercadorias)</strong> de cada <strong>estado</strong>.',
                imagem: 'assets/img/pagina-informacoes.png',
            }
        ];
    }
    TutorialPage.prototype.iniciarApp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "Tutorial:Iniciar:App");
        var alert = this.alertCtrl.create({
            title: 'Comentário',
            message: 'Deseja enviar algum comentário sobre o aplicativo?',
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages__["a" /* ComentarioPage */], {}, {
                            animate: true,
                            direction: 'forward'
                        });
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages__["c" /* MainPage */], {}, {
                            animate: true,
                            direction: 'forward'
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    TutorialPage.prototype.verificarSlide = function (slider) {
        this.sair = slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n  <ion-navbar color="primary">\n    <ion-title>Tutorial</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides dir="{{dir}}" (ionSlideWillChange)="verificarSlide($event)" pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.imagem" class="slide-imagem" />\n      <h2 class="slide-titulo" [innerHTML]="slide.titulo"></h2>\n      <p [innerHTML]="slide.descricao"></p>\n      <button ion-button icon-end large clear (click)="iniciarApp()" end *ngIf="sair">\n        Começar agora\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=2.js.map