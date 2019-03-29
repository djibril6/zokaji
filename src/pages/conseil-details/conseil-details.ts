/**
 * 
 *
 * Page qui liste les video et audio sur une rubrique choisie
 * 
 */

import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import des services
import { VarGlobal } from '../../global/var.global';


@IonicPage({
  name: 'conseilDetails'
})
@Component({
  selector: 'page-conseil-details',
  templateUrl: 'conseil-details.html',
})
export class ConseilDetailsPage {

  rubrique: string;
  titre: string;

  conseilVideo1: string;
  titreVideo1: string;
  conseilVideo2: string;
  titreVideo2: string;
  enligne: string;
  mediaConseil: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public gb: VarGlobal, public screenOrientation: ScreenOrientation) {
    this.screenOrientation.unlock();
    
    this.rubrique = navParams.get('rubrique');
    this.titre = navParams.get('rubrique2');
    this.enligne = navParams.get('enligne');

    this.mediaConseil = gb.mediaConseil;

    //this.titre = this.rubrique.toUpperCase();
    this.rubrique = this.rubrique.toLowerCase();
    switch (gb.langue) {
      case 'ha':
        this.conseilVideo1 = '../../assets/video/conseilDetailsPage/ha/'+this.rubrique+'1Ha.mp4';
        this.conseilVideo2 = '../../assets/video/conseilDetailsPage/ha/'+this.rubrique+'2Ha.mp4';
        break;
      case 'za':
        this.conseilVideo1 = '../../assets/video/conseilDetailsPage/za/'+this.rubrique+'1Za.mp4';
        this.conseilVideo2 = '../../assets/video/conseilDetailsPage/za/'+this.rubrique+'2Za.mp4';
        break;

      case 'fr':
        this.conseilVideo1 = '../../assets/video/conseilDetailsPage/fr/'+this.rubrique+'1Fr.mp4';
        this.conseilVideo2 = '../../assets/video/conseilDetailsPage/fr/'+this.rubrique+'2Fr.mp4';
        this.titreVideo1 = "Partie 1 : "+this.titre;
        this.titreVideo2 = "Partie 2 : "+this.titre;
        break;

      case 'si':
        this.conseilVideo1 = '../../assets/video/conseilDetailsPage/si/'+this.rubrique+'1Si.mp4';
        this.conseilVideo2 = '../../assets/video/conseilDetailsPage/si/'+this.rubrique+'2Si.mp4';
        this.titreVideo1 = "Partie 1 : "+this.titre;
        this.titreVideo2 = "Partie 2 : "+this.titre;
        break;
    
      default:
        break;
    }
  }

  ionViewDidLoad() {
    
  }

}
