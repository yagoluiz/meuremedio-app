import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Alerta {
    constructor(public toastCtrl: ToastController) { }

    create(mensagem: string) {
        return this.toastCtrl.create({
            message: mensagem,
            position: 'top',
            duration: 3000
        }).present();
    }
}