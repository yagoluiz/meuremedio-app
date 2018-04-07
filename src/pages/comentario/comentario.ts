//import 'rxjs/add/operator/toPromise';

import {Component} from '@angular/core';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';

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
  isSaving: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public comentarioApi: ComentarioApi) {
    GoogleAnalytics.sendPageViewForPage('/comentario');
    this.comentario = new Comentario();
  }

  ngOnInit() {
    this.isSaving = false;
  }

  save() {
    console.log('Salvando ...' + JSON.stringify(this.comentario));
    this.isSaving = true;
    
    this.comentarioApi.create(this.comentario)
      .then((result: any) => {
        console.log('usuario criado');
        //this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
 
        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        console.log('erro: '+JSON.stringify(error));
        //this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

//    if (this.comentario.id !== undefined) {
//      //      this.subscribeToSaveResponse(
//      //        this.comentarioService.update(this.comentario));
//    } else {
//      this.subscribeToSaveResponse(this.comentarioService.create(this.comentario));
//    }
  }

  clear() {
    console.log('clear ...');
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<Comentario>>) {
    result.subscribe((res: HttpResponse<Comentario>) =>
      this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
  }

  private onSaveSuccess(result: Comentario) {
    console.log('salvou: ' + result);
    //    this.eventManager.broadcast({name: 'comentarioListModification', content: 'OK'});
    this.isSaving = false;
    //    this.activeModal.dismiss(result);
  }

  private onSaveError() {
    this.isSaving = false;
  }
}