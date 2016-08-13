/**
 * Created by Artur_Nizamutdinov on 7/27/2016.
 */

import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import {appRouterProviders} from "./app/app.routes";

bootstrap(AppComponent, [
    appRouterProviders
])
    .catch(err => console.log(err));