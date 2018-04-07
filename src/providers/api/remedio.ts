import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Remedio } from '../../models/remedio'

import {Constantes} from '../../providers/constantes'

@Injectable()
export class RemedioApi {

    constructor(public http: HttpClient, public constantes: Constantes) { }

    async getByNome(remedio: string) {
        const response = <Array<Remedio>>await this.http.get(`${this.constantes.getBaseUrl()}consulta?value=${remedio}`).toPromise();
        return response;
    }
}