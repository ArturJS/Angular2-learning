/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss'
  ],
  template: `
    <nav class="main-nav">
      <app-header></app-header>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./login'] ">
          Login
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./courses'] ">
          Courses
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./courses/new'] ">
          New Course
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./courses/123'] ">
          Edit Course
        </a>
      </span>
    </nav>

    <main class="main-container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
