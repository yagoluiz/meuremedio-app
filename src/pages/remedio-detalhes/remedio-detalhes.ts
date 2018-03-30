import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'remedio-detalhes.html'
})
export class RemedioDetalhesPage {
  remedio: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.remedio = navParams.get('remedio');
  }
}
