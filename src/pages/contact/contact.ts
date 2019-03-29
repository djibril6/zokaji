import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ApiZokajiService } from '../../services/apizokaji.service';
import { VarGlobal } from '../../global/var.global';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  submitted: boolean = false;
  supportMessage: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public api: ApiZokajiService, public gl: VarGlobal) {
    let toast = this.toastCtrl.create({
      message: 'As-tu des remarques ou suggestions à nous donner ? Nous adorerions connaître ton avis.',
      position: 'top',
      duration: 5000
    });
    toast.present();
  }

  envoyer(form: NgForm) {
    if (form.valid) {
      this.submitted = false;
      let toasts = this.toastCtrl.create({
        message: 'Message envoyé. Merci beaucoup pour ta contribution.',
        position: 'top',
        duration: 3000
      });
      toasts.present();

      var url = this.api.mainUrl + 'affichage.php';
      var dataContact = new FormData;
      dataContact.append('mdp',this.gl.mdp);
      dataContact.append('afficher', 'avis');
      dataContact.append('message', this.supportMessage);
      this.api.ajaxPost(url, dataContact, function(rep){});
      this.supportMessage = "";
    } else {
      this.submitted = true;
    }
  }

  // Si l'utilisateur saisit un message et tente de quitter la page 
  // Sans avoir envoyer le dit message
  ionViewCanLeave(): boolean | Promise<boolean> {
    // Si le message est vide il peut quitter sans problème
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise((resolve: any, reject: any) => {
      let alert = this.alertCtrl.create({
        title: 'Quitter la page page?',
        message: 'Êtes vous sûr de vouloir quitter cette page ? Votre message ne sera pas envoyé.'
      });
      alert.addButton({ text: 'Rester', handler: reject });
      alert.addButton({ text: 'Quitter', role: 'cancel', handler: resolve });

      alert.present();
    });
  }
}
