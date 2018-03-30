import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RemedioDetalhesPage } from './remedio-detalhes';

@NgModule({
  declarations: [
    RemedioDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(RemedioDetalhesPage)
  ],
  exports: [
    RemedioDetalhesPage
  ]
})
export class RemedioDetalhesPageModule { }
