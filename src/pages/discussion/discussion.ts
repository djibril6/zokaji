import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 
 *
 * Page de chat pour une dicussion sélectionnée
 * 
 */

@IonicPage({
  name: 'discussion'
})
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscussionPage');
  }

}
