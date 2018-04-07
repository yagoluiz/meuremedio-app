import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title><img src="assets/img/logo-branca.png" alt="logo"></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Pesquisa', component: 'PesquisaPage' },
    { title: 'Comentário', component: 'ComentarioPage' },
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Sobre', component: 'SobrePage' }
  ]

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
