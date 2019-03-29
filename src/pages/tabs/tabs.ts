import { Component } from '@angular/core';

import { AssistancePage } from '../assistance/assistance';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AssistancePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
