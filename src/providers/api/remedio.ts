import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Remedio } from '../../models/remedio'

@Injectable()
export class RemedioApi {
    API_URL: string = 'http://ec2-18-188-196-175.us-east-2.compute.amazonaws.com:8080/api/';
    remedios: Array<Remedio> = [];

    constructor(public http: HttpClient) { }

    getByNome(remedio: string) {
        return new Promise((resolve, reject) => {
            let url = this.API_URL + 'consulta' + '/' + remedio;

            this.http.get(url)
                .subscribe((result: any) => {
                    this.remedios = result;
                    resolve(this.remedios);
                },
                    (error) => {
                        reject(error);
                        console.log(error);
                    });
        });
    }
}