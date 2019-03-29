import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AssistancePage } from '../pages/assistance/assistance';
import { JeuxPage } from '../pages/jeux/jeux';
import { ConseilPage } from '../pages/conseil/conseil';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { ForumPage } from '../pages/forum/forum';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativeStorage } from '@ionic-native/native-storage';
import { CallNumber } from '@ionic-native/call-number';

// mes services
import { VarGlobal } from '../global/var.global';
import { ApiZokajiService } from '../services/apizokaji.service';

@NgModule({
  declarations: [
    MyApp,
    AssistancePage,
    ContactPage,
    HomePage,
    JeuxPage,
    ConseilPage,
    IndexPage,
    ForumPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AssistancePage,
    ContactPage,
    HomePage,
    JeuxPage,
    ConseilPage,
    IndexPage,
    ForumPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    NativeStorage,
    CallNumber,
    VarGlobal,
    ApiZokajiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
