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

  constructor(public navCtrl: NavController,
    navParams: NavParams) {
    GoogleAnalytics.sendPageViewForPage('/remedio-detalhes');
    this.remedio = navParams.get('remedio');
  }
  
  iniciarDenuncia(remedio: Remedio) {
    GoogleAnalytics.sendEvent('click', "RemedioDetalhe:Iniciar:Denuncia");
    this.navCtrl.push('DenunciaPage', {
      remedio: remedio
    });
  }
}
