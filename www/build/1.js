webpackJsonp([1],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioModule", function() { return ComentarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comentario__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComentarioModule = /** @class */ (function () {
    function ComentarioModule() {
    }
    ComentarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comentario__["a" /* ComentarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comentario__["a" /* ComentarioPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__comentario__["a" /* ComentarioPage */]
            ]
        })
    ], ComentarioModule);
    return ComentarioModule;
}());

//# sourceMappingURL=comentario.module.js.map

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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_comentario__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_comentario__ = __webpack_require__(204);
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








var ComentarioPage = /** @class */ (function () {
    function ComentarioPage(navCtrl, navParams, loadingCtrl, formBuilder, comentarioApi, alerta, regex) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.comentarioApi = comentarioApi;
        this.alerta = alerta;
        this.regex = regex;
        __WEBPACK_IMPORTED_MODULE_7__app_google_analytics__["a" /* GoogleAnalytics */].sendPageViewForPage('/comentario');
        this.comentario = new __WEBPACK_IMPORTED_MODULE_3__models_comentario__["a" /* Comentario */]();
        this.validarComentario();
    }
    ComentarioPage.prototype.validarComentario = function () {
        this.comentarioForm = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(this.regex.ALFABETO),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(this.regex.EMAIL),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            faixaEtaria: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            sexo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            comentario: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    };
    ComentarioPage.prototype.salvarComentario = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_7__app_google_analytics__["a" /* GoogleAnalytics */].sendEvent('click', "Comentario:Cadastrar");
                        loading = this.loadingCtrl.create({
                            content: 'Carregando...'
                        });
                        loading.present();
                        return [4 /*yield*/, this.comentarioApi.create(this.comentario).then(function (result) {
                                loading.dismiss();
                                _this.limparComentario();
                                _this.alerta.create('Comentário inserido com sucesso!');
                            }).catch(function (error) {
                                loading.dismiss();
                                _this.alerta.create('Ooops! Erro ao cadastrar comentário!');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComentarioPage.prototype.limparComentario = function () {
        this.comentarioForm.reset();
    };
    ComentarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comentario',template:/*ion-inline-start:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\comentario\comentario.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Comentário</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<form [formGroup]="comentarioForm" (ngSubmit)="salvarComentario()" padding novalidate>\n\n		<ion-item>\n\n			<ion-label>Nome</ion-label>\n\n			<ion-input type="text" [(ngModel)]="comentario.nome" formControlName="nome" [class.error1]="!comentarioForm.controls.nome.valid && comentarioForm.controls.nome.dirty"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(comentarioForm.get(\'nome\').hasError(\'maxlength\') || comentarioForm.get(\'nome\').hasError(\'pattern\') || comentarioForm.get(\'nome\').hasError(\'required\') ) && comentarioForm.get(\'nome\').touched">\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'nome\').hasError(\'required\') && comentarioForm.get(\'nome\').touched">\n\n				Nome é obrigatório\n\n			</div>\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'nome\').hasError(\'maxlength\') && comentarioForm.get(\'nome\').touched">\n\n				Máximo de 50 caracteres\n\n			</div>\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'nome\').hasError(\'pattern\') && comentarioForm.get(\'nome\').touched">\n\n				Utlize apenas letras do alfabeto\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>E-mail</ion-label>\n\n			<ion-input type="email" [(ngModel)]="comentario.email" formControlName="email" [class.error1]="!comentarioForm.controls.email.valid && comentarioForm.controls.email.dirty"></ion-input>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(comentarioForm.get(\'email\').hasError(\'pattern\') || comentarioForm.get(\'email\').hasError(\'required\')) && comentarioForm.get(\'email\').touched">\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'email\').hasError(\'required\') && comentarioForm.get(\'email\').touched">\n\n				Email é obrigatório\n\n			</div>\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'email\').hasError(\'maxlength\') && comentarioForm.get(\'email\').touched">\n\n				Máximo de 50 caracteres\n\n			</div>\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'email\').hasError(\'pattern\') && comentarioForm.get(\'email\').touched">\n\n				Email inválido\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Faixa etária</ion-label>\n\n			<ion-select [(ngModel)]="comentario.faixaEtaria" formControlName="faixaEtaria" cancelText="Cancelar" [class.error1]="!comentarioForm.controls.faixaEtaria.valid && comentarioForm.controls.faixaEtaria.dirty">\n\n				<ion-option value="" selected disabled>Selecione</ion-option>\n\n				<ion-option value="QUINZE_VINTE">15-19</ion-option>\n\n				<ion-option value="VINTE_TRINTA">20-29</ion-option>\n\n				<ion-option value="TRINTA_QUARENTA">30-39</ion-option>\n\n				<ion-option value="QUARENTA_CINQUENTA">40-49</ion-option>\n\n				<ion-option value="CINQUENTA_SETENTA">50-69</ion-option>\n\n				<ion-option value="MAIOR_QUE_SETENTA">70+</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="comentarioForm.get(\'faixaEtaria\').hasError(\'required\') && comentarioForm.get(\'faixaEtaria\').touched">\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'faixaEtaria\').hasError(\'required\') && comentarioForm.get(\'faixaEtaria\').touched">\n\n				Faixa etária é obrigatória\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Sexo</ion-label>\n\n			<ion-select [(ngModel)]="comentario.sexo" formControlName="sexo" cancelText="Cancelar" [class.error1]="!comentarioForm.controls.sexo.valid && comentarioForm.controls.sexo.dirty">\n\n				<ion-option value="" selected disabled>Selecione</ion-option>\n\n				<ion-option value="FEMININO">Feminino</ion-option>\n\n				<ion-option value="MASCULINO">Masculino</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="comentarioForm.get(\'sexo\').hasError(\'required\') && comentarioForm.get(\'sexo\').touched">\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'sexo\').hasError(\'required\') && comentarioForm.get(\'sexo\').touched">\n\n				Sexo é obrigatório\n\n			</div>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Comentário</ion-label>\n\n			<ion-textarea rows="5" [(ngModel)]="comentario.comentario" formControlName="comentario" [class.error1]="!comentarioForm.controls.comentario.valid && comentarioForm.controls.comentario.dirty"></ion-textarea>\n\n		</ion-item>\n\n		<ion-item no-lines *ngIf="(comentarioForm.get(\'comentario\').hasError(\'maxlength\') || comentarioForm.get(\'comentario\').hasError(\'required\')) && comentarioForm.get(\'comentario\').touched">\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'comentario\').hasError(\'required\') && comentarioForm.get(\'comentario\').touched">\n\n				Comentário é obrigatório\n\n			</div>\n\n			<div class="form-erro" *ngIf="comentarioForm.get(\'comentario\').hasError(\'maxlength\') && comentarioForm.get(\'comentario\').touched">\n\n				Máximo de 100 caracteres\n\n			</div>\n\n		</ion-item>\n\n		<button ion-button type="submit" [disabled]="comentarioForm.invalid" block>Salvar</button>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\Dev\Ionic\UnB\meuremedio-app\src\pages\comentario\comentario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_comentario__["a" /* ComentarioApi */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alerta__["a" /* Alerta */],
            __WEBPACK_IMPORTED_MODULE_6__providers_regex__["a" /* Regex */]])
    ], ComentarioPage);
    return ComentarioPage;
}());

//# sourceMappingURL=comentario.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comentario; });
var Comentario = /** @class */ (function () {
    function Comentario(id, data, nome, email, comentario, faixaEtaria, sexo) {
        this.id = id;
        this.data = data;
        this.nome = nome;
        this.email = email;
        this.comentario = comentario;
        this.faixaEtaria = faixaEtaria;
        this.sexo = sexo;
    }
    return Comentario;
}());

//# sourceMappingURL=comentario.js.map

/***/ })

});
//# sourceMappingURL=1.js.map