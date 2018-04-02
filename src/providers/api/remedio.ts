import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Remedio } from '../../models/remedio'

@Injectable()
export class RemedioApi {
    API_URL: string = 'http://192.168.1.5:8080/api/';

    constructor(public http: HttpClient) { }

    async getByNome(remedio: string) {
        const response = <Array<Remedio>>await this.http.get(`${this.API_URL}consulta?value=${remedio}`).toPromise();
        return response;
    }
}