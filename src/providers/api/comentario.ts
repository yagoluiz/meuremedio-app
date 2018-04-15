import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Comentario } from '../../models/comentario'

import { Constantes } from '../../providers/constantes'

@Injectable()
export class ComentarioApi {
  path: string;

  constructor(public http: HttpClient, public constantes: Constantes) {
    this.path = `${this.constantes.getBaseUrl()}comentarios`;
  }

  async create(comentario: Comentario) {
    var data = {
      "nome": comentario.nome,
      "email": comentario.email,
      "faixaEtaria": comentario.faixaEtaria,
      "sexo": comentario.sexo,
      "comentario": comentario.comentario
    };

    const result = await this.http.post(this.path, data).toPromise();
    return result;
  }
}