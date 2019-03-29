import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 
 *
 * Page de forum
 * 
 */

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  afficherDiscussion() {
    this.navCtrl.push('discussion');
  }

}
