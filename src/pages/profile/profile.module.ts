import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { QRCodeModule } from 'angular2-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    QRCodeModule,
    NgxQRCodeModule
  ],
})
export class ProfilePageModule {}
