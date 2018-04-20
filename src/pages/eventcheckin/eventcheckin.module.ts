import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventcheckinPage } from './eventcheckin';

@NgModule({
  declarations: [
    EventcheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(EventcheckinPage),
  ],
})
export class EventcheckinPageModule {}
