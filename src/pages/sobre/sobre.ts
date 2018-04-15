import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GoogleAnalytics } from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {
  descricao: string;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    GoogleAnalytics.sendPageViewForPage('/sobre');
    this.descricao = 'O aplicativo utiliza dados públicos disponibilizados pela ANVISA (Agência Nacional de Vigilância Sanitária). Todas as informações disponibilizadas, estão disponíveis no site abaixo:';
  }
}
