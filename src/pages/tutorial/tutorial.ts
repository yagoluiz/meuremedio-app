import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, AlertController, Platform } from 'ionic-angular';

import { MainPage } from '../pages';
import { ComentarioPage } from '../pages';

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
  sair = false;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public platform: Platform) {
    GoogleAnalytics.sendPageViewForPage('/tutorial');
    this.dir = platform.dir();
    this.slides = [
      {
        titulo: 'Bem-vindo ao meu remédio :)',
        descricao: 'O <strong>meu remédio</strong> é um aplicativo para consulta de preços de remédios. Aqui você encontra informações de preços máximos que podem ser oferecidos para o <strong>consumidor</strong>, preços máximos que as <strong>farmácias</strong> podem adquirir o remédio das fábricas e detalhes sobre o remédio.',
        imagem: 'assets/img/logo-original.png',
      },
      {
        titulo: 'Como usar o meu remédio?',
        descricao: 'Como no exemplo acima, pesquise o <strong>nome</strong> do remédio desejado para consultar as informações. A <strong>cor</strong> ao lado indicará a tarja do remédio. Bem fácil, não é mesmo?',
        imagem: 'assets/img/pagina-pesquisa.png',
      },
      {
        titulo: 'Denuncie preços ilegais!',
        descricao: 'Após selecionar um <strong>remédio</strong>, você encontra informações e o preço de acordo com o <strong>ICMS (Imposto Sobre Circulação de Mercadorias)</strong> de cada <strong>estado</strong>.',
        imagem: 'assets/img/pagina-informacoes-denuncia.png',
      }
    ];
  }

  iniciarApp() {
    GoogleAnalytics.sendEvent('click', "Tutorial:Iniciar:App");
    let alert = this.alertCtrl.create({
      title: 'Comentário',
      message: 'Deseja enviar algum comentário sobre o aplicativo?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.setRoot(ComentarioPage, {}, {
              animate: true,
              direction: 'forward'
            });
          }
        },
        {
          text: 'Não',
          handler: () => {
            this.navCtrl.setRoot(MainPage, {}, {
              animate: true,
              direction: 'forward'
            });
          }
        }
      ]
    });
    alert.present();
  }

  verificarSlide(slider) {
    this.sair = slider.isEnd();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
