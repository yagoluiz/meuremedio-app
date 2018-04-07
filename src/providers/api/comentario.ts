import 'rxjs/add/operator/toPromise';

import {HttpClient, HttpResponse} from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
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
    //this.http.post<Comentario>(this.API_URL, comentario, {observe: 'response'});
    
    
    var data = {
        nome: comentario.nome,
        email: comentario.email        
      };
    
    return new Promise((resolve, reject) => {
      //this.http.post(this.API_URL + 'comentarios', {comentarioDTO: comentario})
      this.http.post(this.API_URL + 'comentarios', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });

    
  }

}