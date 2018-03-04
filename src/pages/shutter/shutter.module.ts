import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShutterPage } from './shutter';

@NgModule({
  declarations: [
    ShutterPage,
  ],
  imports: [
    IonicPageModule.forChild(ShutterPage),
  ],
})
export class ShutterPageModule {}
