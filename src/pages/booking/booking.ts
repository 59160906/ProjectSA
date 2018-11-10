import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  
  cont =[
    { name : 'min', date: '10/11/2561',timeStarts: '11:53',timeEnds: '13:00',room: 'IF-3C03 ',mejer :'วิทยาการสารสนเทศ'}
    ,{ name : 'mo', date: '11/11/2561',timeStarts: '10:53',timeEnds: '12:00',room: 'IF-3C01 ',mejer :'วิทยาการสารสนเทศ'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  cencel(position: string) {
    let toast = this.toastCtrl.create({
      message: 'ยกเลิกสำเร็จ',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    let data = this.navParams.data;
    console.log(data);
    this.cont = data;
  }

}
