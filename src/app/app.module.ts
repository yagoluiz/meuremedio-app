import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { RemedioApi } from '../providers/providers';
import { ComentarioApi } from '../providers/providers';
import { DenunciaApi } from '../providers/providers';
import { Constantes } from '../providers/providers';
import { Alerta } from '../providers/alerta';
import { Regex } from '../providers/regex';
import { RemediosMock } from '../mocks/providers/remedios-mock';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    RemedioApi,
    ComentarioApi,
    DenunciaApi,
    Constantes,
    Alerta,
    Regex,
    RemediosMock,    
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
