import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {
  descricao: string;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.descricao = 'Este app utiliza dados disponibilizados pela ANVISA :)';
  }
}
