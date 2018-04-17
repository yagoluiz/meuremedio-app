webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alerta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Alerta = /** @class */ (function () {
    function Alerta(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    Alerta.prototype.create = function (mensagem) {
        return this.toastCtrl.create({
            message: mensagem,
            position: 'top',
            duration: 3000
        }).present();
    };
    Alerta = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], Alerta);
    return Alerta;
}());

//# sourceMappingURL=alerta.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Regex = /** @class */ (function () {
    function Regex() {
        this.ALFABETO = '[a-zA-Z ]*';
        this.EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;
    }
    Regex = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Regex);
    return Regex;
}());

//# sourceMappingURL=regex.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comentario/comentario.module": [
		285,
		1
	],
	"../pages/denuncia/denuncia.module": [
		286,
		0
	],
	"../pages/pesquisa/pesquisa.module": [
		287,
		5
	],
	"../pages/remedio-detalhes/remedio-detalhes.module": [
		288,
		4
	],
	"../pages/sobre/sobre.module": [
		289,
		3
	],
	"../pages/tutorial/tutorial.module": [
		290,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemediosMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_remedio_mock__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemediosMock = /** @class */ (function () {
    function RemediosMock() {
        this.remedios = [];
        this.default = {
            "id": 1,
            "nome": "FILINAR G",
            "principioAtivo": "ACEBROFILINA",
            "apresentacao": "5 MG/ML GEL OR CT FR PLAS INC X 120ML + COL MED",
            "classeTerapeutica": "R05C0 - EXPECTORANTES",
            "tipo": "Novo (Referência)",
            "restricaoHospitalar": false,
            "tarja": "Tarja Vermelha",
            "precoFabrica": 11.85,
            "precoMaximo": 20.47,
            "laboratorioNome": "EUROFARMA LABORATÓRIOS S.A.",
            "laboratorioCnpj": "61.190.096/0001-92",
            "laboratorioRegistro": "EUROFARMA LABORATÓRIOS S.A."
        };
        var remedios = [{
                "id": 1,
                "nome": "FILINAR G",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "5 MG/ML GEL OR CT FR PLAS INC X 120ML + COL MED",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Novo (Referência)",
                "restricaoHospitalar": false,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 11.85,
                "precoMaximo": 20.47,
                "laboratorioNome": "EUROFARMA LABORATÓRIOS S.A.",
                "laboratorioCnpj": "61.190.096/0001-92",
                "laboratorioRegistro": "EUROFARMA LABORATÓRIOS S.A."
            }, {
                "id": 2,
                "nome": "ACEBROFILINA",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CT FR PLAS AMB X 120 ML + CP MED",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Genérico",
                "restricaoHospitalar": false,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 15.70,
                "precoMaximo": 27.14,
                "laboratorioNome": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA",
                "laboratorioCnpj": "02.814.497/0001-07",
                "laboratorioRegistro": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA"
            }, {
                "id": 3,
                "nome": "ACEBROFILINA",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CX 50 FR PLAS AMB X 120 ML + 50 CP MED (EMB HOSP)",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Genérico",
                "restricaoHospitalar": true,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 579.85,
                "precoMaximo": 0.00,
                "laboratorioNome": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA",
                "laboratorioCnpj": "02.814.497/0001-07",
                "laboratorioRegistro": "CIMED INDÚSTRIA DE MEDICAMENTOS LTDA"
            }, {
                "id": 4,
                "nome": "BRONTEK",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CT FR PEAD X 120 ML + CP MED",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Similar",
                "restricaoHospitalar": false,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 22.94,
                "precoMaximo": 39.63,
                "laboratorioNome": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A",
                "laboratorioCnpj": "03.485.572/0001-04",
                "laboratorioRegistro": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A"
            }, {
                "id": 5,
                "nome": "BRONTEK",
                "principioAtivo": "ACEBROFILINA",
                "apresentacao": "10 MG/ML XPE CX 60 FR PEAD X 120 ML + 60 CP MED (EMB HOSP)",
                "classeTerapeutica": "R05C0 - EXPECTORANTES",
                "tipo": "Similar",
                "restricaoHospitalar": true,
                "tarja": "Tarja Vermelha",
                "precoFabrica": 1202.68,
                "precoMaximo": 0.00,
                "laboratorioNome": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A",
                "laboratorioCnpj": "03.485.572/0001-04",
                "laboratorioRegistro": "GEOLAB INDÚSTRIA FARMACÊUTICA S/A"
            }];
        for (var _i = 0, remedios_1 = remedios; _i < remedios_1.length; _i++) {
            var remedio = remedios_1[_i];
            this.remedios.push(new __WEBPACK_IMPORTED_MODULE_1__models_remedio_mock__["a" /* RemedioMock */](remedio));
        }
    }
    RemediosMock.prototype.query = function (params) {
        if (!params) {
            return this.remedios;
        }
        return this.remedios.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    RemediosMock.prototype.add = function (remedio) {
        this.remedios.push(remedio);
    };
    RemediosMock.prototype.delete = function (remedio) {
        this.remedios.splice(this.remedios.indexOf(remedio), 1);
    };
    RemediosMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RemediosMock);
    return RemediosMock;
}());

//# sourceMappingURL=remedios-mock.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentarioPage; });
var FirstRunPage = 'TutorialPage';
var MainPage = 'PesquisaPage';
var ComentarioPage = 'ComentarioPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentarioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constantes__ = __webpack_require__(46);
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




var ComentarioApi = /** @class */ (function () {
    function ComentarioApi(http, constantes) {
        this.http = http;
        this.constantes = constantes;
        this.path = this.constantes.getBaseUrl() + "comentarios";
    }
    ComentarioApi.prototype.create = function (comentario) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            "nome": comentario.nome,
                            "email": comentario.email,
                            "faixaEtaria": comentario.faixaEtaria,
                            "sexo": comentario.sexo,
                            "comentario": comentario.comentario
                        };
                        return [4 /*yield*/, this.http.post(this.path, data).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ComentarioApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_constantes__["a" /* Constantes */]])
    ], ComentarioApi);
    return ComentarioApi;
}());

//# sourceMappingURL=comentario.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciaApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constantes__ = __webpack_require__(46);
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




var DenunciaApi = /** @class */ (function () {
    function DenunciaApi(http, constantes) {
        this.http = http;
        this.constantes = constantes;
        this.path = this.constantes.getBaseUrl() + "denuncias";
    }
    DenunciaApi.prototype.create = function (denuncia) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            "nome": denuncia.nome,
                            "email": denuncia.email,
                            "farmacia": denuncia.farmacia,
                            "preco": denuncia.preco,
                            "texto": denuncia.texto,
                            "medicamentoId": denuncia.medicamentoId
                        };
                        return [4 /*yield*/, this.http.post(this.path, data).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    DenunciaApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_constantes__["a" /* Constantes */]])
    ], DenunciaApi);
    return DenunciaApi;
}());

//# sourceMappingURL=denuncia.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constantes__ = __webpack_require__(46);
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




var RemedioApi = /** @class */ (function () {
    function RemedioApi(http, constantes) {
        this.http = http;
        this.constantes = constantes;
        this.path = this.constantes.getBaseUrl() + "consulta";
    }
    RemedioApi.prototype.getByNome = function (remedio) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.path + "?value=" + remedio).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RemedioApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_constantes__["a" /* Constantes */]])
    ], RemedioApi);
    return RemedioApi;
}());

//# sourceMappingURL=remedio.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alerta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_regex__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_providers_remedios_mock__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    backButtonText: 'Voltar'
                }, {
                    links: [
                        { loadChildren: '../pages/comentario/comentario.module#ComentarioModule', name: 'ComentarioPage', segment: 'comentario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/denuncia/denuncia.module#RemedioDetalhesPageModule', name: 'DenunciaPage', segment: 'denuncia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisa/pesquisa.module#PesquisaPageModule', name: 'PesquisaPage', segment: 'pesquisa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remedio-detalhes/remedio-detalhes.module#RemedioDetalhesPageModule', name: 'RemedioDetalhesPage', segment: 'remedio-detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["d" /* RemedioApi */],
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["a" /* ComentarioApi */],
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* DenunciaApi */],
                __WEBPACK_IMPORTED_MODULE_6__providers_providers__["b" /* Constantes */],
                __WEBPACK_IMPORTED_MODULE_7__providers_alerta__["a" /* Alerta */],
                __WEBPACK_IMPORTED_MODULE_8__providers_regex__["a" /* Regex */],
                __WEBPACK_IMPORTED_MODULE_9__mocks_providers_remedios_mock__["a" /* RemediosMock */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioMock; });
var RemedioMock = /** @class */ (function () {
    function RemedioMock(fields) {
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return RemedioMock;
}());

//# sourceMappingURL=remedio-mock.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["b" /* FirstRunPage */];
        this.pages = [
            { title: 'Comentário', component: 'ComentarioPage' },
            { title: 'Pesquisa', component: 'PesquisaPage' },
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Sobre', component: 'SobrePage' }
        ];
        platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title><img src=\"assets/img/logo-branca.png\" alt=\"logo\"></ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"true\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constantes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Constantes = /** @class */ (function () {
    function Constantes() {
        this.API_URL = 'https://meuremedio-backend.herokuapp.com/api/';
    }
    Constantes.prototype.getBaseUrl = function () {
        return this.API_URL;
    };
    Constantes = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Constantes);
    return Constantes;
}());

//# sourceMappingURL=constantes.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_remedio__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_comentario__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_denuncia__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constantes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alerta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__regex__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mocks_providers_remedios_mock__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__api_remedio__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__api_comentario__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__api_denuncia__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__constantes__["a"]; });
/* unused harmony reexport Alerta */
/* unused harmony reexport Regex */
/* unused harmony reexport RemediosMock */








//# sourceMappingURL=providers.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map