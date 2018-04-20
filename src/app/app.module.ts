import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeModule } from 'angular2-qrcode';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShareProvider } from '../providers/share/share';
import { AddneweventComponent} from '../components/addnewevent/addnewevent';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddneweventComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    QRCodeModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddneweventComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShareProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NgxQRCodeModule,
    BarcodeScanner
  ]
})
export class AppModule {}
