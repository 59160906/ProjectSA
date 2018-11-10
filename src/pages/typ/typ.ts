import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TypPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typ',
  templateUrl: 'typ.html',
})
export class TypPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypPage');
  }
  User(){
    this.navCtrl.push("RegisterPage");
  }
  amin(){
    this.navCtrl.push("RegisteraminPage");
  }

}
