import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';

import {Comentario} from '../../models/comentario'
import {ComentarioApi} from '../../providers/api/comentario'

import {GoogleAnalytics} from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario.html'
})
export class ComentarioPage {

  comentario: Comentario;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public comentarioApi: ComentarioApi) {
    GoogleAnalytics.sendPageViewForPage('/comentario');
    this.comentario = new Comentario();
  }

  salvar() {    
    GoogleAnalytics.sendEvent('click', "Comentario:Cadastrar");

    this.comentarioApi.create(this.comentario)
      .then((result: any) => {        
        this.inserirMensagem('Usuário criado com sucesso');
      })
      .catch((error: any) => {        
        this.inserirMensagem('Erro ao criar o usuário.');
      });
  }

  inserirMensagem(mensagem: string) {
    return this.toastCtrl.create({
      message: mensagem,
      position: 'top',
      duration: 3000
    });
  }
}