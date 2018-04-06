import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Chart } from 'chart.js';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    this.pages = [
      { title: 'Login', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Dashboard', component: DashboardPage }
    ];

    events.subscribe('user:created',(user,time) => {
      console.log("Welcome ",user,"at ",time)
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
