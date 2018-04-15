import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Comentario } from '../../models/comentario'
import { ComentarioApi } from '../../providers/api/comentario'
import { Alerta } from '../../providers/alerta'
import { Regex } from '../../providers/regex'

import { GoogleAnalytics } from "../../app/google-analytics";

@IonicPage()
@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario.html'
})
export class ComentarioPage {
  comentario: Comentario;
  comentarioForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public comentarioApi: ComentarioApi,
    public alerta: Alerta,
    public regex: Regex) {
    GoogleAnalytics.sendPageViewForPage('/comentario');
    this.comentario = new Comentario();
    this.validarComentario();
  }

  private validarComentario() {
    this.comentarioForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(this.regex.ALFABETO),
      Validators.required])],
      email: ['', Validators.compose([Validators.pattern(this.regex.EMAIL),
      Validators.maxLength(50),
      Validators.required])],
      faixaEtaria: ['', Validators.required],
      sexo: ['', Validators.required],
      comentario: ['', Validators.compose([Validators.maxLength(100),
      Validators.required])]
    });
  }

  async salvarComentario() {
    GoogleAnalytics.sendEvent('click', "Comentario:Cadastrar");
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loading.present();
    await this.comentarioApi.create(this.comentario).then((result: any) => {
      loading.dismiss();
      this.limparComentario();
      this.alerta.create('Comentário inserido com sucesso!');
    }).catch((error: any) => {
      loading.dismiss();
      this.alerta.create('Ooops! Erro ao cadastrar comentário!');
    });
  }

  limparComentario() {
    this.comentarioForm.reset();
  }
}