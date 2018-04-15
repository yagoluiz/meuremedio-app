import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Remedio } from '../../models/remedio'

import { GoogleAnalytics } from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-remedio-detalhes',
  templateUrl: 'remedio-detalhes.html'
})
export class RemedioDetalhesPage {
  remedio: any;
  estado: string;
  precoFabrica: string;
  precoConsumidor: string;

  constructor(public navCtrl: NavController,
    navParams: NavParams) {
    GoogleAnalytics.sendPageViewForPage('/remedio-detalhes');
    this.remedio = navParams.get('remedio');
    this.validarPrecos();
  }

  private validarPrecos() {
    this.precoConsumidor = 'Selecione seu estado';
    let precoFabrica = this.remedio.precoFabrica;
    this.precoFabrica = precoFabrica != undefined &&
      precoFabrica != 0 &&
      precoFabrica != '' ?
      `R$ ${precoFabrica}` : 'Não informado pela ANVISA';
  }

  selecionarEstado(estado) {
    this.estado = estado;
    if (!this.estado || !this.estado.trim()) {
      return;
    } else if (this.estado == 'RJ') {
      let precoConsumidor20 = this.remedio.precoConsumidor20;
      this.precoConsumidor = precoConsumidor20 != undefined &&
        precoConsumidor20 != 0 &&
        precoConsumidor20 != '' ?
        `R$ ${precoConsumidor20}` : 'Não informado pela ANVISA';
    } else if (this.estado == 'AM' ||
      this.estado == 'AP' ||
      this.estado == 'BA' ||
      this.estado == 'CE' ||
      this.estado == 'MA' ||
      this.estado == 'MG' ||
      this.estado == 'PB' ||
      this.estado == 'PE' ||
      this.estado == 'PI' ||
      this.estado == 'PR' ||
      this.estado == 'RN' ||
      this.estado == 'RS' ||
      this.estado == 'SE' ||
      this.estado == 'SP' ||
      this.estado == 'TO') {
      let precoConsumidor18 = this.remedio.precoConsumidor18;
      this.precoConsumidor = precoConsumidor18 != undefined &&
        precoConsumidor18 != 0 &&
        precoConsumidor18 != '' ?
        `R$ ${precoConsumidor18}` : 'Não informado pela ANVISA';
    } else {
      let precoConsumidor17 = this.remedio.precoConsumidor17;
      this.precoConsumidor = precoConsumidor17 != undefined &&
        precoConsumidor17 != 0 &&
        precoConsumidor17 != '' ?
        `R$ ${precoConsumidor17}` : 'Não informado pela ANVISA';
    }
  }

  iniciarDenuncia(remedio: Remedio) {
    GoogleAnalytics.sendEvent('click', "RemedioDetalhe:Iniciar:Denuncia");
    this.navCtrl.push('DenunciaPage', {
      remedio: remedio
    });
  }
}
