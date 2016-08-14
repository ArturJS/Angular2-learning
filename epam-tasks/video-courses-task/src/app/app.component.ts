/**
 * Created by Artur_Nizamutdinov on 7/27/2016.
 */
declare var require:any;
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router';

@Component({
    selector: 'app',
    template: `
    <h1 class="abc">App Component</h1>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [ 'app.scss' ]
})
export class AppComponent {
}