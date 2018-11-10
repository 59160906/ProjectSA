import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }
  room(){
    this.navCtrl.setRoot("RoomPage");
  }
  regis(){
    this.navCtrl.push("TypPage");
  }
  
}
