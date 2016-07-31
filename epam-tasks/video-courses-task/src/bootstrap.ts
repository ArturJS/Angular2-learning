/**
 * Created by Artur_Nizamutdinov on 7/27/2016.
 */
///<reference path="../typings/index.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import {appRouterProviders} from "./app/app.routes";

bootstrap(AppComponent, [
    appRouterProviders
])
    .catch(err => console.log(err));