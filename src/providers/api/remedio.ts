import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Remedio } from '../../models/remedio'

@Injectable()
export class RemedioApi {
    API_URL: string = 'http://ec2-18-188-196-175.us-east-2.compute.amazonaws.com:8080/api/';

    constructor(public http: HttpClient) { }

    async getByNome(remedio: string) {
        const response = <Array<Remedio>>await this.http.get(`${this.API_URL}consulta/${remedio}`).toPromise();
        return response;
    }
}