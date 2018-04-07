import 'rxjs/add/operator/toPromise';

import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Comentario} from '../../models/comentario'

export type EntityResponseType = HttpResponse<Comentario>;

@Injectable()
export class ComentarioApi {
  //API_URL: string = 'https://meuremedio-backend.herokuapp.com/api/';
  API_URL: string = 'http://127.0.0.1:8080/api/';

  constructor(public http: HttpClient) {}

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
      this.http.post(this.API_URL + 'comentarios', data)
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