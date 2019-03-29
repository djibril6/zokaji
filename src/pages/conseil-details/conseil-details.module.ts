import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConseilDetailsPage } from './conseil-details';

@NgModule({
  declarations: [
    ConseilDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConseilDetailsPage),
  ],
})
export class ConseilDetailsPageModule {}
