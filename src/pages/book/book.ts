import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from "ionic-angular";

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  
  public event = {
    timeStarts: '07:43',
    timeEnds: '07:43'
  }
  templateUrl: 'template.html'
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }
  book() {
    let toast = this.toastCtrl.create({
      message: 'คุณได้ทำการจองห้องสำเร็จ',
      duration: 2000,
    });
    toast.present();
  }
  cencel(position: string) {
    let toast = this.toastCtrl.create({
      message: 'ยกเลิก',
      duration: 2000,
      position: position
    });

    toast.present(toast);

    this.navCtrl.push("RoomPage")
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
