import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Remedio } from '../../models/remedio'

import { Constantes } from '../../providers/constantes'

@Injectable()
export class RemedioApi {
    path: string;

    constructor(public http: HttpClient, public constantes: Constantes) {
        this.path = `${this.constantes.getBaseUrl()}consulta`;
    }

    async getByNome(remedio: string) {
        const result = <Array<Remedio>>await this.http.get(`${this.path}?value=${remedio}`).toPromise();
        return result;
    }
}