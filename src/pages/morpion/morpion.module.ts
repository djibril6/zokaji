import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorpionPage } from './morpion';

@NgModule({
  declarations: [
    MorpionPage,
  ],
  imports: [
    IonicPageModule.forChild(MorpionPage),
  ],
})
export class MorpionPageModule {}
