import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform, ToastController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativeStorage } from '@ionic-native/native-storage';

import { TabsPage } from '../pages/tabs/tabs';
import { IndexPage } from '../pages/index/index';
import { AssistancePage } from '../pages/assistance/assistance';
import { JeuxPage } from '../pages/jeux/jeux';
import { ConseilPage } from '../pages/conseil/conseil';
import { ContactPage } from '../pages/contact/contact';
import { ForumPage } from '../pages/forum/forum';

import { VarGlobal } from '../global/var.global';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  indexAudio = new Audio('../assets/audio/menu/ha.mp3');
  conseilAudio = new Audio('../assets/audio/menu/ha.mp3');
  jeuxAudio = new Audio('../assets/audio/menu/ha.mp3');
  forumAudio = new Audio('../assets/audio/menu/ha.mp3');
  appellerAudio = new Audio('../assets/audio/menu/ha.mp3');
  avisAudio = new Audio('../assets/audio/menu/ha.mp3');
  langueAudio = new Audio('../assets/audio/menu/ha.mp3');
  infoAudio = new Audio('../assets/audio/menu/ha.mp3');

  appPagesFr = [
    { title: 'Accueil', component: IndexPage, icon: 'home' },
    { title: 'Conseil', component: ConseilPage, icon: 'transgender' },
    { title: 'Jeux', component: JeuxPage, icon: 'game-controller-b' },
    { title: 'Forum', component: ForumPage, icon: 'chatbubbles' },
    { title: 'Appeller', component: AssistancePage, icon: 'call' },
    { title: 'Votre Avis', component: ContactPage, icon: 'megaphone' },
    { title: 'Choisir une langue', component: TabsPage, icon: 'settings' },
    { title: 'Infos de l\'App', component: 'about', icon: 'information-circle' },
  ];

  constructor(platform: Platform,
     statusBar: StatusBar,
     splashScreen: SplashScreen,
     public events: Events,
    public menu: MenuController,
    public screenOrientation: ScreenOrientation,
    public gl: VarGlobal,
    public toastCtrl: ToastController,
    private nativeStorage: NativeStorage) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    this.nativeStorage.getItem('langue')
      .then(
      data => {
        this.gl.langue = data.langueChoisie
        this.rootPage = IndexPage;
      },
      error => console.error(error)
    );
  }

  openPage(page) {
    this.menu.close();
    if (this.gl.langue != "") {
      this.nav.setRoot(page.component);
    } else if(page.component == TabsPage || page.component == ForumPage || page.component == 'about' || page.component == ContactPage) {
      this.nav.setRoot(page.component);
    } else {
      const toast = this.toastCtrl.create({
        message: 'Choisir une langue d\'abord',
        duration: 3000
      });
      toast.present();
      this.nav.setRoot(TabsPage);
    }
    if (page.component == TabsPage) {
      this.gl.langue = "";
      this.nativeStorage.remove('langue');
      this.nativeStorage.remove('visite');
    }
    this.indexAudio.pause();
    this.conseilAudio.pause();
    this.jeuxAudio.pause();
    this.forumAudio.pause();
    this.appellerAudio.pause();
    this.avisAudio.pause();
    this.langueAudio.pause();
    this.infoAudio.pause();
  }

  lireAudio(page) {
    switch (page.component) {
      case IndexPage:
        if (this.indexAudio.paused) {
          this.indexAudio.play();
        } else {
          this.indexAudio.currentTime = 0;
          this.indexAudio.pause();
        }
        //this.indexAudio.pause();
        this.conseilAudio.pause();
        this.jeuxAudio.pause();
        this.forumAudio.pause();
        this.appellerAudio.pause();
        this.avisAudio.pause();
        this.langueAudio.pause();
        this.infoAudio.pause();

        //this.indexAudio.currentTime = 0;
        this.conseilAudio.currentTime = 0;
        this.jeuxAudio.currentTime = 0;
        this.forumAudio.currentTime = 0;
        this.appellerAudio.currentTime = 0;
        this.avisAudio.currentTime = 0;
        this.langueAudio.currentTime = 0;
        this.infoAudio.currentTime = 0;
        break;
      case ConseilPage:
        if (this.conseilAudio.paused) {
          this.conseilAudio.play();
        } else {
          this.conseilAudio.currentTime = 0;
          this.conseilAudio.pause();
        }
        this.indexAudio.pause();
        //this.conseilAudio.pause();
        this.jeuxAudio.pause();
        this.forumAudio.pause();
        this.appellerAudio.pause();
        this.avisAudio.pause();
        this.langueAudio.pause();
        this.infoAudio.pause();

        this.indexAudio.currentTime = 0;
        //this.conseilAudio.currentTime = 0;
        this.jeuxAudio.currentTime = 0;
        this.forumAudio.currentTime = 0;
        this.appellerAudio.currentTime = 0;
        this.avisAudio.currentTime = 0;
        this.langueAudio.currentTime = 0;
        this.infoAudio.currentTime = 0;
        break;
      case JeuxPage:
        if (this.jeuxAudio.paused) {
          this.jeuxAudio.play();
        } else {
          this.jeuxAudio.currentTime = 0;
          this.jeuxAudio.pause();
        }
        this.indexAudio.pause();
        this.conseilAudio.pause();
        //this.jeuxAudio.pause();
        this.forumAudio.pause();
        this.appellerAudio.pause();
        this.avisAudio.pause();
        this.langueAudio.pause();
        this.infoAudio.pause();

        this.indexAudio.currentTime = 0;
        this.conseilAudio.currentTime = 0;
        //this.jeuxAudio.currentTime = 0;
        this.forumAudio.currentTime = 0;
        this.appellerAudio.currentTime = 0;
        this.avisAudio.currentTime = 0;
        this.langueAudio.currentTime = 0;
        this.infoAudio.currentTime = 0;
        break;
      case ForumPage:
        if (this.forumAudio.paused) {
          this.forumAudio.play();
        } else {
          this.forumAudio.currentTime = 0;
          this.forumAudio.pause();
        }
        this.indexAudio.pause();
        this.conseilAudio.pause();
        this.jeuxAudio.pause();
        //this.forumAudio.pause();
        this.appellerAudio.pause();
        this.avisAudio.pause();
        this.langueAudio.pause();
        this.infoAudio.pause();

        this.indexAudio.currentTime = 0;
        this.conseilAudio.currentTime = 0;
        this.jeuxAudio.currentTime = 0;
        //this.forumAudio.currentTime = 0;
        this.appellerAudio.currentTime = 0;
        this.avisAudio.currentTime = 0;
        this.langueAudio.currentTime = 0;
        this.infoAudio.currentTime = 0;
        break;
      case AssistancePage:
        if (this.appellerAudio.paused) {
          this.appellerAudio.play();
        } else {
          this.appellerAudio.currentTime = 0;
          this.appellerAudio.pause();
        }
        this.indexAudio.pause();
        this.conseilAudio.pause();
        this.jeuxAudio.pause();
        this.forumAudio.pause();
        //this.appellerAudio.pause();
        this.avisAudio.pause();
        this.langueAudio.pause();
        this.infoAudio.pause();

        this.indexAudio.currentTime = 0;
        this.conseilAudio.currentTime = 0;
        this.jeuxAudio.currentTime = 0;
        this.forumAudio.currentTime = 0;
        //this.appellerAudio.currentTime = 0;
        this.avisAudio.currentTime = 0;
        this.langueAudio.currentTime = 0;
        this.infoAudio.currentTime = 0;
        break;
      case ContactPage:
        if (this.avisAudio.paused) {
          this.avisAudio.play();
        } else {
          this.avisAudio.currentTime = 0;
          this.avisAudio.pause();
        }
        this.indexAudio.pause();
        this.conseilAudio.pause();
        this.jeuxAudio.pause();
        this.forumAudio.pause();
        this.appellerAudio.pause();
        //this.avisAudio.pause();
        this.langueAudio.pause();
        this.infoAudio.pause();

        this.indexAudio.currentTime = 0;
        this.conseilAudio.currentTime = 0;
        this.jeuxAudio.currentTime = 0;
        this.forumAudio.currentTime = 0;
        this.appellerAudio.currentTime = 0;
        //this.avisAudio.currentTime = 0;
        this.langueAudio.currentTime = 0;
        this.infoAudio.currentTime = 0;
        break;
      
      case TabsPage:
        if (this.langueAudio.paused) {
          this.langueAudio.play();
        } else {
          this.langueAudio.currentTime = 0;
          this.langueAudio.pause();
        }
        this.indexAudio.pause();
        this.conseilAudio.pause();
        this.jeuxAudio.pause();
        this.forumAudio.pause();
        this.appellerAudio.pause();
        this.avisAudio.pause();
        //this.langueAudio.pause();
        this.infoAudio.pause();

        this.indexAudio.currentTime = 0;
        this.conseilAudio.currentTime = 0;
        this.jeuxAudio.currentTime = 0;
        this.forumAudio.currentTime = 0;
        this.appellerAudio.currentTime = 0;
        this.avisAudio.currentTime = 0;
        //this.langueAudio.currentTime = 0;
        this.infoAudio.currentTime = 0;
        break;
      case 'about':
        if (this.infoAudio.paused) {
          this.infoAudio.play();
        } else {
          this.infoAudio.currentTime = 0;
          this.infoAudio.pause();
        }
        this.indexAudio.pause();
        this.conseilAudio.pause();
        this.jeuxAudio.pause();
        this.forumAudio.pause();
        this.appellerAudio.pause();
        this.avisAudio.pause();
        this.langueAudio.pause();
        //this.infoAudio.pause();

        this.indexAudio.currentTime = 0;
        this.conseilAudio.currentTime = 0;
        this.jeuxAudio.currentTime = 0;
        this.forumAudio.currentTime = 0;
        this.appellerAudio.currentTime = 0;
        this.avisAudio.currentTime = 0;
        this.langueAudio.currentTime = 0;
        //this.infoAudio.currentTime = 0;
        break;
    
      default:
        break;
    }
  }
}
