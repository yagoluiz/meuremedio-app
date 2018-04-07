import 'rxjs/add/operator/toPromise';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Denuncia} from '../../models/denuncia'

import {Constantes} from '../../providers/constantes'

@Injectable()
export class DenunciaApi {

  path: string;

  constructor(public http: HttpClient, public constantes: Constantes) {
    this.path = this.constantes.getBaseUrl() + 'denuncias';
  }

  create(denuncia: Denuncia) {
    console.log('salvar: ' + denuncia);

    var data = {
      "nome": denuncia.nome,
      "email": denuncia.email,
      "farmacia": denuncia.farmacia,
      "preco": denuncia.preco,
      "texto": denuncia.texto,
      "medicamentoId": denuncia.medicamentoId
    };
    
    //TODO se for usar dessa forma mesmo eh melhor "externalizar" pra ser reusado nos outros modulos
    return new Promise((resolve, reject) => {
      this.http.post(this.path, data)
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