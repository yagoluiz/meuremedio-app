import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { MainPage } from '../pages';

import { GoogleAnalytics } from "../../app/google-analytics";

export interface Slide {
  titulo: string;
  descricao: string;
  imagem: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  sair = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public platform: Platform) {
    GoogleAnalytics.sendPageViewForPage('/tutorial');
    this.dir = platform.dir();
    this.slides = [
      {
        titulo: 'Bem-vindo ao meu remédio :)',
        descricao: 'O <b>meu remédio</b> é um app para consulta de medicamentos, desde de preços máximo que podem ser oferecidos pelo consumidar até informações detalhadas da medicação.',
        imagem: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        titulo: 'Como usar o meu rémedio?',
        descricao: 'Pesquise o nome do rémedio desejado e o app irá trazer várias informações, além do preço máximo disponível ao consumidor. Bem fácil, não é mesmo?',
        imagem: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        titulo: 'Como começar?',
        descricao: 'Comece agora! Entedeu tudo direitinho? Termine o tutorial e comece a usar o app já :)',
        imagem: 'assets/img/ica-slidebox-img-3.png',
      }
    ];
  }

  iniciarApp() {
    GoogleAnalytics.sendEvent('click', "Tutorial:Iniciar:App");
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  verificarSlide(slider) {
    this.sair = !slider.isEnd();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
