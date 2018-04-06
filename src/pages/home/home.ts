import { Component } from '@angular/core';
import { NavController,AlertController,Events } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login:any;
  isUsername:String;
  isPassword:String;

  

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public events: Events) {
    this.login = {
      "username" : "",
      "password" : ""
    }

    
  
  }

  loginValidate(){
    let error = true
    if(this.login.username == '' || this.login.username == null || this.login.username == undefined){
      error = false
      this.isUsername = "blank"
    }
    if(this.login.password == '' || this.login.password == null || this.login.password == undefined){
      error = false
      this.isPassword = "blank"
    }

    return error
  }

  presentAlert(title,subT) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subT,
      buttons: ['Dismiss']
    });
    alert.present();
  }




  app42Login() {
    if(this.loginValidate()){
      this.events.publish('user:created', this.login.username, Date.now());
      this.login = {
        "username" : "",
        "password" : ""
      }
      this.navCtrl.push(DashboardPage);

    }else{
      this.presentAlert('Error','Please check your credentials')
    }
  }

}
