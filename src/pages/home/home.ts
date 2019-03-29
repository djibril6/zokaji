import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

//import des pages
import { IndexPage } from "../index/index";
import { ForumPage } from '../forum/forum';

// import des services
import { VarGlobal } from '../../global/var.global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //@ViewChild(Nav) nav: Nav;

  ha = new Audio('../../assets/audio/ha.mp3');
  za = new Audio('../../assets/audio/za.mp3');
  fr = new Audio('../../assets/audio/fr.mp3');

  actionha: string = "play";
  actionza: string = "play";
  actionfr: string = "play";

  constructor(public navCtrl: NavController, public nav: Nav, public gb: VarGlobal, private nativeStorage: NativeStorage, public screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  allerAuForum(){
    this.nav.setRoot(ForumPage);
  }

  choisirLangue(langue: string) {
    this.gb.langue = langue;
    this.za.currentTime = 0;
    this.ha.currentTime = 0;
    this.fr.currentTime = 0;
    this.ha.pause();
    this.za.pause();
    this.fr.pause();
    this.actionha = "play";
    this.actionza = "play";
    this.actionfr = "play";
    this.nativeStorage.setItem('Jeuxvisite', {jeux: 'non'});
    this.nativeStorage.setItem('Conseilvisite', {conseil: 'non'});
    this.nativeStorage.setItem('Assistancevisite', {assistance: 'non'});
    this.nativeStorage.setItem('langue', {langueChoisie: langue})
      .then(
        () => this.nav.setRoot(IndexPage),
        error => console.error('Error storing item', error)
      );
      //this.nav.setRoot(IndexPage); // A enlever avant compilation
      
      
  }

  joue (langue: string) {
    switch (langue) {
      case "ha":
        this.za.currentTime = 0;
        this.fr.currentTime = 0;
        this.za.pause();
        this.fr.pause();
        this.actionza = "play";
        this.actionfr = "play";
        if (this.ha.paused) {
          this.ha.play();
          this.actionha = "pause";
        } else {
          this.ha.currentTime = 0;
          this.ha.pause();
          this.actionha = "play";
        }
        break;

      case "za":
        this.ha.currentTime = 0;
        this.fr.currentTime = 0;
        this.ha.pause();
        this.fr.pause();
        this.actionha = "play";
        this.actionfr = "play";
        if (this.za.paused) {
          this.za.play();
          this.actionza = "pause";
        } else {
          this.za.currentTime = 0;
          this.za.pause();
          this.actionza = "play";
        }
        break;

      case "fr":
        this.ha.currentTime = 0;
        this.za.currentTime = 0;
        this.za.pause();
        this.ha.pause();
        this.actionha = "play";
        this.actionza = "play";
        if (this.fr.paused) {
          this.fr.play();
          this.actionfr = "pause";
        } else {
          this.fr.currentTime = 0;
          this.fr.pause();
          this.actionfr = "play";
        }
        break;
    
      default:
        break;
    }
  }

}
