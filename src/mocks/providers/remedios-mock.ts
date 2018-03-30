import { Injectable } from '@angular/core';

import { RemedioMock } from '../../models/remedio-mock';

@Injectable()
export class RemediosMock {
  remedios: RemedioMock[] = [];

  default: any = {
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

  constructor() {
    let remedios = [{
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

    for (let remedio of remedios) {
      this.remedios.push(new RemedioMock(remedio));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.remedios;
    }

    return this.remedios.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(remedio: RemedioMock) {
    this.remedios.push(remedio);
  }

  delete(remedio: RemedioMock) {
    this.remedios.splice(this.remedios.indexOf(remedio), 1);
  }
}
