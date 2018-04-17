webpackJsonp([0],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemedioDetalhesPageModule", function() { return RemedioDetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denuncia__ = __webpack_require__(296);
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
                __WEBPACK_IMPORTED_MODULE_2__denuncia__["a" /* DenunciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__denuncia__["a" /* DenunciaPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__denuncia__["a" /* DenunciaPage */]
            ]
        })
    ], RemedioDetalhesPageModule);
    return RemedioDetalhesPageModule;
}());

//# sourceMappingURL=denuncia.module.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_denuncia__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_denuncia__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alerta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_regex__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_google_analytics__ = __webpack_require__(291);
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








var DenunciaPage = /** @class */ (function () {
    function DenunciaPage(navCtrl, navParams, loadingCtrl, formBuilder, denunciaApi, alerta, regex) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.denunciaApi = denunciaApi;
        this.alerta = alerta;
        this.regex = regex;
        __WEBPACK_IMPORTED_MODULE_7__app_google_analytics__["a" /* GoogleAnalytics */].sendPageViewForPage('/denuncia');
        this.remedio = navParams.get('remedio');
        this.denuncia = new __WEBPACK_IMPORTED_MODULE_3__models_denuncia__["a" /* Denuncia */]();
        this.denuncia.medicamentoId = this.remedio.idMedicamento;
        this.validarDenuncia();
    }
    DenunciaPage.prototype.validarDenuncia = function () {
        this.denunciaForm = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(this.regex.ALFABETO),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(this.regex.EMAIL),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            farmacia: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            preco: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            texto: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    };
    DenunciaPage.prototype.salvarDenuncia = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_7__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "Denuncia:Cadastrar");
                        loading = this.loadingCtrl.create({
                            content: 'Carregando...'
                        });
                        loading.present();
                        return [4 /*yield*/, this.denunciaApi.create(this.denuncia).then(function (result) {
                                _this.limparComentario();
                                loading.dismiss();
                                _this.alerta.create('Denúncia inserida com sucesso!');
                            }).catch(function (error) {
                                loading.dismiss();
                                _this.alerta.create('Ooops! Erro ao cadastrar Denúncia!');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DenunciaPage.prototype.limparComentario = function () {
        this.denunciaForm.reset();
    };
    DenunciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-denuncia',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\denuncia\denuncia.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-title>Denúncia</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-card>\n\n		<ion-list>\n\n			<ion-item [ngClass]="{\n\n					\'tarja-verde\': remedio.tarja === \'Venda Livre\',\n\n					\'tarja-vermelha\': remedio.tarja === \'Tarja Vermelha\',\n\n					\'tarja-preta\': remedio.tarja === \'Tarja Preta\'}">\n\n				<h2 class="texto-branco" text-wrap>\n\n					{{remedio.nome}}\n\n				</h2>\n\n				<p class="texto-branco" text-wrap>{{remedio.apresentacao}}</p>\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-card>\n\n	<form [formGroup]="denunciaForm" (ngSubmit)="salvarDenuncia()" padding novalidate>\n\n		<ion-item>\n\n			<ion-label>Nome</ion-label>\n\n			<ion-input type="text" [(ngModel)]="denuncia.nome" formControlName="nome" [class.error1]="!denunciaForm.controls.nome.valid && denunciaForm.controls.nome.dirty"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(denunciaForm.get(\'nome\').hasError(\'maxlength\') || denunciaForm.get(\'nome\').hasError(\'pattern\') || denunciaForm.get(\'nome\').hasError(\'required\')) && denunciaForm.get(\'nome\').touched">\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'nome\').hasError(\'required\') && denunciaForm.get(\'nome\').touched">\n\n				Nome é obrigatório\n\n			</div>\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'nome\').hasError(\'maxlength\') && denunciaForm.get(\'nome\').touched">\n\n				Máximo de 50 caracteres\n\n			</div>\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'nome\').hasError(\'pattern\') && denunciaForm.get(\'nome\').touched">\n\n				Utlize apenas letras do alfabeto\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>E-mail</ion-label>\n\n			<ion-input type="email" [(ngModel)]="denuncia.email" formControlName="email" [class.error1]="!denunciaForm.controls.email.valid && denunciaForm.controls.email.dirty"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(denunciaForm.get(\'email\').hasError(\'maxlength\') || denunciaForm.get(\'email\').hasError(\'pattern\') || denunciaForm.get(\'email\').hasError(\'required\')) && denunciaForm.get(\'email\').touched">\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'email\').hasError(\'required\') && denunciaForm.get(\'email\').touched">\n\n				Email é obrigatório\n\n			</div>\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'email\').hasError(\'maxlength\') && denunciaForm.get(\'email\').touched">\n\n				Máximo de 50 caracteres\n\n			</div>\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'email\').hasError(\'pattern\') && denunciaForm.get(\'email\').touched">\n\n				Email inválido\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Farmácia</ion-label>\n\n			<ion-input type="text" [(ngModel)]="denuncia.farmacia" formControlName="farmacia" [class.error1]="!denunciaForm.controls.farmacia.valid && denunciaForm.controls.farmacia.dirty"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(denunciaForm.get(\'farmacia\').hasError(\'maxlength\') || denunciaForm.get(\'farmacia\').hasError(\'required\')) && denunciaForm.get(\'farmacia\').touched">\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'farmacia\').hasError(\'required\') && denunciaForm.get(\'farmacia\').touched">\n\n				Farmácia é obrigatória\n\n			</div>\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'farmacia\').hasError(\'maxlength\') && denunciaForm.get(\'farmacia\').touched">\n\n				Máximo de 50 caracteres\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Preço</ion-label>\n\n			<ion-input type="number" [(ngModel)]="denuncia.preco" formControlName="preco" [class.error1]="!denunciaForm.controls.preco.valid && denunciaForm.controls.preco.dirty"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(denunciaForm.get(\'preco\').hasError(\'maxlength\') || denunciaForm.get(\'preco\').hasError(\'required\')) && denunciaForm.get(\'preco\').touched">\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'preco\').hasError(\'required\') && denunciaForm.get(\'preco\').touched">\n\n				Preço é obrigatório\n\n			</div>\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'preco\').hasError(\'maxlength\') && denunciaForm.get(\'preco\').touched">\n\n				Máximo de 10 números\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Comentário</ion-label>\n\n			<ion-textarea rows="3" [(ngModel)]="denuncia.texto" formControlName="texto" [class.error1]="!denunciaForm.controls.texto.valid && denunciaForm.controls.texto.dirty"></ion-textarea>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(denunciaForm.get(\'texto\').hasError(\'maxlength\') || denunciaForm.get(\'texto\').hasError(\'required\')) && denunciaForm.get(\'texto\').touched">\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'texto\').hasError(\'required\') && denunciaForm.get(\'texto\').touched">\n\n				Texto é obrigatório\n\n			</div>\n\n			<div class="form-erro" *ngIf="denunciaForm.get(\'texto\').hasError(\'maxlength\') && denunciaForm.get(\'texto\').touched">\n\n				Máximo de 100 caracteres\n\n			</div>\n\n		</ion-item>\n\n		<button ion-button type="submit" [disabled]="denunciaForm.invalid" block>Salvar</button>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\denuncia\denuncia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_denuncia__["a" /* DenunciaApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerta__["a" /* Alerta */],
            __WEBPACK_IMPORTED_MODULE_6__providers_regex__["a" /* Regex */]])
    ], DenunciaPage);
    return DenunciaPage;
}());

//# sourceMappingURL=denuncia.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Denuncia; });
var Denuncia = /** @class */ (function () {
    function Denuncia(id, data, farmacia, nome, email, texto, preco, medicamentoId, medicamentoNome) {
        this.id = id;
        this.data = data;
        this.farmacia = farmacia;
        this.nome = nome;
        this.email = email;
        this.texto = texto;
        this.preco = preco;
        this.medicamentoId = medicamentoId;
        this.medicamentoNome = medicamentoNome;
    }
    return Denuncia;
}());

//# sourceMappingURL=denuncia.js.map

/***/ })

});
//# sourceMappingURL=0.js.map