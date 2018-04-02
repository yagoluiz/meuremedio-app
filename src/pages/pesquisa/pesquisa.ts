import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { Remedio } from '../../models/remedio'
import { RemedioApi } from '../../providers/api/remedio'

import { RemediosMock } from '../../providers/providers';

import { GoogleAnalytics } from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html'
})
export class PesquisaPage {
  remedios: Array<Remedio> = [];
  MockRemedios: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public remedioApi: RemedioApi,
    public remediosMock: RemediosMock) {
    GoogleAnalytics.sendPageViewForPage('/pesquisa');
  }

  async buscarRemedio(ev) {
    GoogleAnalytics.sendEvent('click', "Pesquisa:Buscar:Remedio");
    let remedio = ev.target.value;
    if (!remedio || !remedio.trim()) {
      this.remedios = [];
      return;
    }
    await this.remedioApi.getByNome(remedio).then((result: Array<Remedio>) => {
      this.criarLoading();
      this.remedios = result;      
    }).catch((error: any) => {
      //TODO: Refatoração quando serviço estiver refatorado (HTTPS)
      this.criarMensagem('Ooops! Erro ao listar remédio.');
      
//      this.MockRemedios = this.remediosMock.query({
//        principioAtivo: remedio
//      });
    });
  }

  abrirRemedio(remedio: Remedio) {
    GoogleAnalytics.sendEvent('click', "Pesquisa:Abrir:Remedio");
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