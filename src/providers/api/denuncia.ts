import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Denuncia } from '../../models/denuncia'

import { Constantes } from '../../providers/constantes'

@Injectable()
export class DenunciaApi {
  path: string;

  constructor(public http: HttpClient, public constantes: Constantes) {
    this.path = `${this.constantes.getBaseUrl()}denuncias`;
  }

  async create(denuncia: Denuncia) {
    var data = {
      "nome": denuncia.nome,
      "email": denuncia.email,
      "farmacia": denuncia.farmacia,
      "preco": denuncia.preco,
      "texto": denuncia.texto,
      "medicamentoId": denuncia.medicamentoId
    };

    const result = await this.http.post(this.path, data).toPromise();
    return result;
  }
}