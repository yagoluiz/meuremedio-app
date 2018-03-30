import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;

  tab1Titulo = " ";
  tab2Titulo = " ";

  constructor(public navCtrl: NavController) {
    this.tab1Titulo = "Pesquisa";
    this.tab2Titulo = "Sobre";
  }
}