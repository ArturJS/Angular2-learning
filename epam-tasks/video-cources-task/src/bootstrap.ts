/**
 * Created by Artur_Nizamutdinov on 7/27/2016.
 */
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app/app.component';

bootstrap(AppComponent)
    .catch(err => console.log(err));