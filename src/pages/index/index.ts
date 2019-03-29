import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ToastController, Nav } from 'ionic-angular';

/**
 * 
 *
 * Page d'accueil qui vient après le choix de langue 
 * 
 */

import { ScreenOrientation } from '@ionic-native/screen-orientation';

// import des services
import { VarGlobal } from '../../global/var.global';
import { ApiZokajiService } from '../../services/apizokaji.service';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  @ViewChild(Slides) slides: Slides;

  video1: string;
  titreVideo1: string = "Titre de la vidéo";
  video2: string;
  titreVideo2: string = "Titre de la fameuse vidéo";

  constructor(public navCtrl: NavController, public navParams: NavParams, public gb: VarGlobal,public toastCtrl: ToastController, public screenOrientation: ScreenOrientation, public nav: Nav, public api: ApiZokajiService) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    
    switch (gb.langue) {
      case 'ha':
        this.video1 = "../../assets/video/indexPage/ha/indexVideo1Ha.mp4";
        this.video2 = "../../assets/video/indexPage/ha/indexVideo2Ha.mp4";
        break;
      case 'za':
        this.video1 = "../../assets/video/indexPage/za/indexVideo1Za.mp4";
        this.video2 = "../../assets/video/indexPage/za/indexVideo2Za.mp4";
        break;

      case 'fr':
        this.video1 = "../../assets/video/indexPage/fr/indexVideo1Fr.mp4";
        this.video2 = "../../assets/video/indexPage/fr/indexVideo2Fr.mp4";
        break;

      case 'si':
        this.video1 = "../../assets/video/indexPage/si/indexVideo1Si.mp4";
        this.video2 = "../../assets/video/indexPage/si/indexVideo2Si.mp4";
        break;
    
      default:
        break;
    }

    const toast = this.toastCtrl.create({
      message: 'Glisser les images suivant l\'horizontal',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

    var url = this.api.mainUrl + 'affichage.php';
      var dataIndex = new FormData;
      var gb = this.gb;
      dataIndex.append('mdp',this.gb.mdp);
      dataIndex.append('afficher', 'page');
      dataIndex.append('page', 'IndexPage');
      dataIndex.append('langue', gb.langue);
      this.api.ajaxPost(url, dataIndex, function(rep){
        if (rep.success) {
          gb.mediaPageIndex = rep.result; 
        }
      });

      var dataPart = new FormData;
      dataPart.append('mdp',this.gb.mdp);
      dataPart.append('afficher', 'partenaires');
      this.api.ajaxPost(url, dataPart, function(rep){
        if (rep.success) {
          gb.partenaires = rep.result; 
        }
      });
  }

  goToSlide() {
    this.slides.pager = true;
    if (this.slides.isEnd()) {
      this.slides.slideTo(0, 1000);
    } else {
      this.slides.slideNext(1000);
    }
  }

  goToSlidePrev() {
    this.slides.pager = true;
    if (this.slides.isBeginning()) {
      this.slides.slideTo(this.slides.length()-1, 1000);
    } else {
      this.slides.slidePrev(1000);
    }
  }
}
