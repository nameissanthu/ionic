import { Component } from '@angular/core';
import { GodavariPage } from "../godavari/godavari";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Godavari2Page } from "../godavari2/godavari2";
import { Rjy3Page } from "../rjy3/rjy3";
import { Rjy4Page } from "../rjy4/rjy4";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
   pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController) {
 
  }
  godavari(){
    this.navCtrl.push(GodavariPage)
  }
  godavari2(){
    this.navCtrl.push(Godavari2Page)
  }
  rjy3(){
    this.navCtrl.push(Rjy3Page)
  }
  rjy4(){
    this.navCtrl.push(Rjy4Page)
  }
}
