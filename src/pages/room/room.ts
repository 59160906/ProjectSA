import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
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
}
