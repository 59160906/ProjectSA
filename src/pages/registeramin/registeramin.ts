import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisteraminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registeramin',
  templateUrl: 'registeramin.html',
})
export class RegisteraminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  resigteramin(){
    this.navCtrl.setRoot("RoomaminPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisteraminPage');
  }

}
