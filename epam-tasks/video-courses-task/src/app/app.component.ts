/**
 * Created by Artur_Nizamutdinov on 7/27/2016.
 */
declare var require:any;
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router';

@Component({
    selector: 'app',
    template: `
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class AppComponent {
}