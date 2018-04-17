webpackJsonp([4],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemedioDetalhesPageModule", function() { return RemedioDetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remedio_detalhes__ = __webpack_require__(298);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__remedio_detalhes__["a" /* RemedioDetalhesPage */])
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_google_analytics__ = __webpack_require__(291);
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
        this.validarPrecos();
    }
    RemedioDetalhesPage.prototype.validarPrecos = function () {
        this.precoConsumidor = 'Selecione seu estado';
        var precoFabrica = this.remedio.precoFabrica;
        this.precoFabrica = precoFabrica != undefined &&
            precoFabrica != 0 &&
            precoFabrica != '' ?
            "R$ " + precoFabrica : 'Não informado pela ANVISA';
    };
    RemedioDetalhesPage.prototype.selecionarEstado = function (estado) {
        this.estado = estado;
        if (!this.estado || !this.estado.trim()) {
            return;
        }
        else if (this.estado == 'RJ') {
            var precoConsumidor20 = this.remedio.precoConsumidor20;
            this.precoConsumidor = precoConsumidor20 != undefined &&
                precoConsumidor20 != 0 &&
                precoConsumidor20 != '' ?
                "R$ " + precoConsumidor20 : 'Não informado pela ANVISA';
        }
        else if (this.estado == 'AM' ||
            this.estado == 'AP' ||
            this.estado == 'BA' ||
            this.estado == 'CE' ||
            this.estado == 'MA' ||
            this.estado == 'MG' ||
            this.estado == 'PB' ||
            this.estado == 'PE' ||
            this.estado == 'PI' ||
            this.estado == 'PR' ||
            this.estado == 'RN' ||
            this.estado == 'RS' ||
            this.estado == 'SE' ||
            this.estado == 'SP' ||
            this.estado == 'TO') {
            var precoConsumidor18 = this.remedio.precoConsumidor18;
            this.precoConsumidor = precoConsumidor18 != undefined &&
                precoConsumidor18 != 0 &&
                precoConsumidor18 != '' ?
                "R$ " + precoConsumidor18 : 'Não informado pela ANVISA';
        }
        else {
            var precoConsumidor17 = this.remedio.precoConsumidor17;
            this.precoConsumidor = precoConsumidor17 != undefined &&
                precoConsumidor17 != 0 &&
                precoConsumidor17 != '' ?
                "R$ " + precoConsumidor17 : 'Não informado pela ANVISA';
        }
    };
    RemedioDetalhesPage.prototype.iniciarDenuncia = function (remedio) {
        __WEBPACK_IMPORTED_MODULE_2__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "RemedioDetalhe:Iniciar:Denuncia");
        this.navCtrl.push('DenunciaPage', {
            remedio: remedio
        });
    };
    RemedioDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remedio-detalhes',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-title>Informações</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-card>\n\n		<ion-list>\n\n			<ion-item [ngClass]="{\n\n					\'tarja-verde\': remedio.tarja === \'Venda Livre\',\n\n					\'tarja-vermelha\': remedio.tarja === \'Tarja Vermelha\',\n\n					\'tarja-preta\': remedio.tarja === \'Tarja Preta\'}">\n\n				<h2 class="texto-branco">\n\n					{{remedio.nome}}\n\n				</h2>\n\n				<p class="texto-branco" text-wrap>{{remedio.apresentacao}}</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-list>\n\n			<ion-item class="preco-farmacia">\n\n				<h2 class="texto-branco">Preço farmácia</h2>\n\n				<p class="texto-branco">{{precoFabrica}}</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-list>\n\n			<ion-item class="preco-consumidor">\n\n				<ion-label class="texto-branco">Seu estado?</ion-label>\n\n				<ion-select [(ngModel)]="estado" (ionChange)="selecionarEstado(estado)" cancelText="Cancelar" class="texto-branco" text-wrap>\n\n					<ion-option value="" selected disabled>Selecione</ion-option>\n\n					<ion-option value="AC">Acre</ion-option>\n\n					<ion-option value="AL">Alagoas</ion-option>\n\n					<ion-option value="AP">Amapá</ion-option>\n\n					<ion-option value="AM">Amazonas</ion-option>\n\n					<ion-option value="BA">Bahia</ion-option>\n\n					<ion-option value="CE">Ceará</ion-option>\n\n					<ion-option value="DF">Distrito Federal</ion-option>\n\n					<ion-option value="ES">Espírito Santo</ion-option>\n\n					<ion-option value="GO">Goiás</ion-option>\n\n					<ion-option value="MA">Maranhão</ion-option>\n\n					<ion-option value="MT">Mato Grosso</ion-option>\n\n					<ion-option value="MS">Mato Grosso do Sul</ion-option>\n\n					<ion-option value="MG">Minas Gerais</ion-option>\n\n					<ion-option value="PA">Pará</ion-option>\n\n					<ion-option value="PB">Paraíba</ion-option>\n\n					<ion-option value="PR">Paraná</ion-option>\n\n					<ion-option value="PE">Pernambuco</ion-option>\n\n					<ion-option value="PI">Piauí</ion-option>\n\n					<ion-option value="RJ">Rio de Janeiro</ion-option>\n\n					<ion-option value="RN">Rio Grande do Norte</ion-option>\n\n					<ion-option value="RS">Rio Grande do Sul</ion-option>\n\n					<ion-option value="RO">Rondônia</ion-option>\n\n					<ion-option value="RR">Roraima</ion-option>\n\n					<ion-option value="SC">Santa Catarina</ion-option>\n\n					<ion-option value="SP">São Paulo</ion-option>\n\n					<ion-option value="SE">Sergipe</ion-option>\n\n					<ion-option value="TO">Tocantins</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<ion-item class="preco-consumidor">\n\n				<h2 class="texto-branco">Preço consumidor</h2>\n\n				<p class="texto-branco">{{precoConsumidor}}</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-card>\n\n	<ion-card>\n\n		<ion-list>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Princípio ativo</h2>\n\n				<p class="texto-cinza" text-wrap>{{remedio.principioAtivo}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-branco">\n\n				<h2 class="texto-preto">Classe terapêutica</h2>\n\n				<p class="texto-cinza" text-wrap>{{remedio.classeTerapeutica}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Laboratório</h2>\n\n				<p class="texto-cinza" text-wrap>{{remedio.laboratorioNome}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-branco">\n\n				<h2 class="texto-preto">CNPJ</h2>\n\n				<p class="texto-cinza" text-wrap>{{remedio.laboratorioCnpj}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Registro</h2>\n\n				<p class="texto-cinza" text-wrap>{{remedio.laboratorioRegistro}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-branco">\n\n				<h2 class="texto-preto">Tipo</h2>\n\n				<p class="texto-cinza" text-wrap>{{remedio.tipo}}</p>\n\n			</ion-item>\n\n			<ion-item class="informacoes-cinza">\n\n				<h2 class="texto-preto">Registro hospitalar</h2>\n\n				<p class="texto-cinza" text-wrap>{{remedio.restricaoHospitalarStr}}</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-card>\n\n	<ion-card>\n\n		<button ion-button (click)="iniciarDenuncia(remedio)" block>Denunciar</button>\n\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\remedio-detalhes\remedio-detalhes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RemedioDetalhesPage);
    return RemedioDetalhesPage;
}());

//# sourceMappingURL=remedio-detalhes.js.map

/***/ })

});
//# sourceMappingURL=4.js.map