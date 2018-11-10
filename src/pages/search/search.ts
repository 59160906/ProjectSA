import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      '(ชื่อห้อง : IF-3C01 (50) สถานะ : ไม่ว่าง)',
      'ชื่อห้อง : IF-3C02 (50) สถานะ : ว่าง',
      'ชื่อห้อง : IF-3C03 (50) สถานะ : ไม่ว่าง',
      'ชื่อห้อง : IF-3C04 (50) สถานะ : ไม่ว่าง',
      'ชื่อห้อง : IF-3C05 (50) สถานะ : ว่าง',
      'ชื่อห้อง : IF-4C02 (50) สถานะ : ไม่ว่าง',
      'ชื่อห้อง : 5T02 (50)  สถานะ : ว่าง',
      'ชื่อห้อง : IF-4C04 (50)  สถานะ : ไม่ว่าง',
     'ชื่อห้อง : IF-4C01 (50)  สถานะ : ว่าง'
    ,'ชื่อห้อง : IF-4C05 (120)  สถานะ : ไม่ว่าง',
      'ชื่อห้อง : IF-5C04 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-6C04 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-6C01 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-6C03 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-6C02 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-6C04 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-4C04 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-5T01 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-5T05 (120) สถานะ : ไม่ว่าง',
  'ชื่อห้อง : IF-4T03 (50)  สถานะ : ว่าง',
  'ชื่อห้อง : IF-5T03 (120)  สถานะ : ไม่ว่าง',
    ];
  }
  getItems(ev) {

    this.initializeItems();

    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
