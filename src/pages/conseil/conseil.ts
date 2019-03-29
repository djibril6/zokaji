import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';

import { VarGlobal } from '../../global/var.global';
import { ApiZokajiService } from '../../services/apizokaji.service';

/**
 * 
 *
 * Page comportant les thématiques sur la santé sexuelle et reproductive
 * 
 */

@Component({
  selector: 'page-conseil',
  templateUrl: 'conseil.html',
})
export class ConseilPage {

  cn: string = "sans";

  aideConseilHa = new Audio("../../assets/audio/conseilPage/ha/aideHa.mp3");
  aideConseilZa = new Audio("../../assets/audio/conseilPage/za/aideZa.mp3");

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, public gl: VarGlobal, public api: ApiZokajiService) {

    var url = this.api.mainUrl + 'affichage.php';
      var dataConseil = new FormData;
      var gl = this.gl;
      dataConseil.append('mdp',this.gl.mdp);
      dataConseil.append('afficher', 'rubrique');
      this.api.ajaxPost(url, dataConseil, function(rep){
        if (rep.success) {
          gl.rubriqueConseil = rep.result; 
        }
      });

    this.nativeStorage.getItem('Conseilvisite')
    .then(
      data => {
        if (data.conseil == "non") {
          if (gl.langue == "ha") {
            this.aideConseilHa.play();
          } else if (gl.langue == "za") {
            this.aideConseilZa.play();
          } 
          this.nativeStorage.setItem('Conseilvisite', {conseil: 'oui'});
        } 
      },
      error => {
      }
    );

      var dataConseil2 = new FormData;
      dataConseil2.append('mdp',this.gl.mdp);
      dataConseil2.append('afficher', 'conseil');
      dataConseil2.append('langue', gl.langue);
      this.api.ajaxPost(url, dataConseil2, function(rep){
        if (rep.success) {
          gl.mediaConseil = rep.result; 
        }
      });
  }

  voirConseil(rubrique: String, rubrique2: string, enligne: string = 'false') {
    this.navCtrl.push('conseilDetails', {
      rubrique: rubrique,
      rubrique2: rubrique2,
      enligne: enligne
    });
  }

}
