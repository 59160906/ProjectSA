import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomaminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roomamin',
  templateUrl: 'roomamin.html',
})
export class RoomaminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  check(){
    this.navCtrl.push("CheckPage");
  }
  search(){
    this.navCtrl.push("SearchPage");
  }
  description(){
    this.navCtrl.push("DecriptionPage");
  }
  booking(){
    this.navCtrl.push("BookingPage");
  }
  book(){
    this.navCtrl.push("BookPage");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomaminPage');
  }

}
