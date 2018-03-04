import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstPage } from "../pages/first/first";
import { ShutterPage } from "../pages/shutter/shutter";
import { SecondPage } from "../pages/second/second";
import { GodavariPage } from "../pages/godavari/godavari";
import { Godavari2Page } from "../pages/godavari2/godavari2";
import { Rjy3Page } from "../pages/rjy3/rjy3";
import { Rjy4Page } from "../pages/rjy4/rjy4";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    FirstPage,
    ShutterPage,
    SecondPage,
    GodavariPage,
    Godavari2Page,
    Rjy3Page,
    Rjy4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    FirstPage,
    ShutterPage,
    SecondPage,
    GodavariPage,
    Godavari2Page,
    Rjy3Page,
    Rjy4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
