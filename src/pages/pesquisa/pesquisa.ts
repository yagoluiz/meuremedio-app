import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { Remedio } from '../../models/remedio'
import { RemedioApi } from '../../providers/api/remedio'

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html'
})
export class PesquisaPage {
  remedios: Array<Remedio> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public remedioApi: RemedioApi) { }

  buscarRemedio(ev) {
    let remedio = ev.target.value;
    if (!remedio || !remedio.trim()) {
      this.remedios = [];
      return;
    }
    this.remedioApi.getByNome(remedio).then((result: any) => {
      this.criarLoading();
      this.remedios = result;
    }).catch((error: any) => {
      this.criarMensagem('Ooops! Erro ao listar o remédio.');
    });
  }

  abrirRemedio(remedio: Remedio) {
    this.navCtrl.push('RemedioDetalhesPage', {
      remedio: remedio
    });
  }

  criarLoading() {
    return this.loadingCtrl.create({
      content: "Carregando...",
      duration: 3000
    }).present();
  }

  criarMensagem(mensagem: string) {
    return this.toastCtrl.create({
      message: mensagem,
      position: 'top',
      duration: 3000
    }).present();
  }
}