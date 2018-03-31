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
    this.descricao = 'Este app utiliza dados disponibilizados pela ANVISA :)';
  }
}
