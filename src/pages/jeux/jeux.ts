import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 
 *
 * Page de jeux
 * 
 */

import { NativeStorage } from '@ionic-native/native-storage';

import { VarGlobal } from '../../global/var.global';

@Component({
  selector: 'page-jeux',
  templateUrl: 'jeux.html',
})
export class JeuxPage {

  aideJeuxHa = new Audio("../../assets/audio/jeuxPage/ha/aideHa.mp3");
  aideJeuxZa = new Audio("../../assets/audio/jeuxPage/za/aideZa.mp3");

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, public gl: VarGlobal) {
    this.nativeStorage.getItem('Jeuxvisite')
    .then(
      data => {
        if (data.jeux == "non") {
          if (gl.langue == "ha") {
            this.aideJeuxHa.play();
          } else if (gl.langue == "za") {
            this.aideJeuxZa.play();
          } 
          this.nativeStorage.setItem('Jeuxvisite', {jeux: 'oui'});
        } 
      },
      error => {
      }
    );
  }

  ionViewDidLoad() {
    
  }

  jouerJeux(jeux: string) {
    this.navCtrl.push(jeux);
  }

}
