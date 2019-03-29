import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { NativeStorage } from '@ionic-native/native-storage';

// import des services
import { VarGlobal } from '../../global/var.global';
import { ApiZokajiService } from '../../services/apizokaji.service';


@Component({
  selector: 'page-assistance',
  templateUrl: 'assistance.html'
})
export class AssistancePage {

  aideAssistanceHaZa = new Audio("../../assets/audio/assistancePage/haza/aideHaZa.mp3");

  constructor(public navCtrl: NavController, private callNumber: CallNumber, private nativeStorage: NativeStorage, public api: ApiZokajiService, public gb: VarGlobal) {
    this.nativeStorage.getItem('Assistancevisite')
    .then(
      data => {
        if (data.assistance == "non") {
          this.aideAssistanceHaZa.play();
          this.nativeStorage.setItem('Assistancevisite', {assistance: 'oui'});
        } 
      },
      error => {
      }
    );

    var url = this.api.mainUrl + 'affichage.php';
      var dataAssistance = new FormData;
      var gb = this.gb;
      dataAssistance.append('mdp',this.gb.mdp);
      dataAssistance.append('afficher', 'assistance');
      this.api.ajaxPost(url, dataAssistance, function(rep){
        if (rep.success) {
          gb.numAssistance = rep.result; 
        }
      });
  }

  appeller(numero: string) {
    this.callNumber.callNumber(numero, true);
  }

}
