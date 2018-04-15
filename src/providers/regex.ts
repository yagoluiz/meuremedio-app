import { Injectable } from '@angular/core';

@Injectable()
export class Regex {
    ALFABETO: string = '[a-zA-Z ]*';
    EMAIL: any = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;
}