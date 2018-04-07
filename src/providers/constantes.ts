import {Injectable} from '@angular/core';

@Injectable()
export class Constantes {

  //API_URL: string = 'https://meuremedio-backend.herokuapp.com/api/';
  API_URL: string = 'http://127.0.0.1:8080/api/';

  getBaseUrl() {
    return this.API_URL;
  }

}