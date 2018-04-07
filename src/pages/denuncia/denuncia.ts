import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { Denuncia } from '../../models/denuncia'
import { DenunciaApi } from '../../providers/api/denuncia'

import {GoogleAnalytics} from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
//  styleUrls: ['denuncia.scss']
})
export class DenunciaPage {
  remedio: any;
  denuncia: Denuncia;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public denunciaApi: DenunciaApi) {
    GoogleAnalytics.sendPageViewForPage('/denuncia');
    this.remedio = navParams.get('remedio');
    this.denuncia = new Denuncia();
    this.denuncia.medicamentoId = this.remedio.idMedicamento;
  }
  
  salvar() {    
    GoogleAnalytics.sendEvent('click', "Denuncia:Cadastrar");

    this.denunciaApi.create(this.denuncia)
      .then((result: any) => {        
        this.inserirMensagem('Denúncia criada com sucesso');
      })
      .catch((error: any) => {        
        this.inserirMensagem('Erro ao criar denúncia.');
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