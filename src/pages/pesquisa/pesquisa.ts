import 'rxjs/add/operator/toPromise';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Remedio } from '../../models/remedio'
import { RemedioApi } from '../../providers/api/remedio'
import { Alerta } from '../../providers/alerta'

import { GoogleAnalytics } from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html'
})
export class PesquisaPage {
  remedios: Array<Remedio> = [];
  remedio: string = null;
  remedioQtd: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public remedioApi: RemedioApi,
    public alerta: Alerta) {
    GoogleAnalytics.sendPageViewForPage('/pesquisa');
  }

  async buscarRemedio(ev) {
    GoogleAnalytics.sendEvent('click', "Pesquisa:Buscar:Remedio");
    this.remedioQtd = 0;
    this.remedio = ev.target.value;
    if (!this.remedio || !this.remedio.trim() || this.remedio.length < 3) {
      this.remedios = [];
      return;
    }
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loading.present();
    await this.remedioApi.getByNome(this.remedio).then((result: Array<Remedio>) => {
      if (result.length > 0) {
        this.remedios = result.slice(0, 10);
        loading.dismiss();
      } else {
        loading.dismiss();
        this.alerta.create('Ooops! Nenhum remédio encontrado!');
      }
    }).catch((error: any) => {
      loading.dismiss();
      this.alerta.create('Ooops! Erro ao listar remédios!');
    });
  }

  async carregarRemedio(ev) {
    this.remedioQtd++;
    await this.remedioApi.getByNome(this.remedio).then((result: Array<Remedio>) => {
      this.remedios = result.slice(0, 20 * this.remedioQtd);
    }).catch((error: any) => {
      this.alerta.create('Ooops! Erro ao listar remédios!');
    });
    ev.complete();
  }

  cancelarPesquisa(ev) {
    this.remedios = [];
    return;
  }

  abrirRemedio(remedio: Remedio) {
    GoogleAnalytics.sendEvent('click', "Pesquisa:Abrir:Remedio");
    this.navCtrl.push('RemedioDetalhesPage', {
      remedio: remedio
    });
  }
}