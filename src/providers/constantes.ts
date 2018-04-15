import { Injectable } from '@angular/core';

@Injectable()
export class Constantes {
  API_URL: string = 'https://meuremedio-backend.herokuapp.com/api/';

  getBaseUrl() {
    return this.API_URL;
  }
}