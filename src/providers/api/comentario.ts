import 'rxjs/add/operator/toPromise';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Comentario} from '../../models/comentario'

import {Constantes} from '../../providers/constantes'

@Injectable()
export class ComentarioApi {

  constructor(public http: HttpClient, public constantes: Constantes) {}

  create(comentario: Comentario) {
    console.log('salvar: ' + comentario);

    var data = {
      "nome": comentario.nome,
      "email": comentario.email,
      "faixaEtaria": comentario.faixaEtaria,
      "sexo": comentario.sexo,
      "comentario": comentario.comentario
    };

    return new Promise((resolve, reject) => {
      this.http.post(this.constantes.getBaseUrl() + 'comentarios', data)
        .subscribe((result: any) => {
          //resolve(result.json());
          resolve(result);
        },
        (error) => {
          reject(error.json());
        });
    });


  }

}