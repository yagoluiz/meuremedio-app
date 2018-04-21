import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Denuncia } from '../../models/denuncia'
import { DenunciaApi } from '../../providers/api/denuncia'
import { Alerta } from '../../providers/alerta'
import { Regex } from '../../providers/regex'

import { GoogleAnalytics } from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
})
export class DenunciaPage {
  remedio: any;
  denuncia: Denuncia;
  denunciaForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public denunciaApi: DenunciaApi,
    public alerta: Alerta,
    public regex: Regex) {
    GoogleAnalytics.sendPageViewForPage('/denuncia');
    this.remedio = navParams.get('remedio');
    this.denuncia = new Denuncia();
    this.denuncia.medicamentoId = this.remedio.idMedicamento;
    this.validarDenuncia();
  }

  private validarDenuncia() {
    this.denunciaForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.maxLength(50),
      Validators.pattern(this.regex.ALFABETO),
      Validators.required])],
      email: ['', Validators.compose([Validators.pattern(this.regex.EMAIL),
      Validators.maxLength(50),
      Validators.required])],
      farmacia: ['', Validators.compose([Validators.maxLength(50),
      Validators.required])],
      preco: ['', Validators.compose([Validators.maxLength(10),
      Validators.required])],
      texto: ['', Validators.compose([Validators.maxLength(100),
      Validators.required])]
    });
  }

  async salvarDenuncia() {
    GoogleAnalytics.sendEvent('click', "Denuncia:Cadastrar");
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loading.present();
    await this.denunciaApi.create(this.denuncia).then((result: any) => {
      this.limparComentario();
      loading.dismiss();
      this.alerta.create('Denúncia inserida com sucesso!');
    }).catch((error: any) => {
      loading.dismiss();
      this.alerta.create('Ooops! Erro ao cadastrar Denúncia!');
    });
  }

  limparComentario() {
    this.denunciaForm.reset();
  }
}