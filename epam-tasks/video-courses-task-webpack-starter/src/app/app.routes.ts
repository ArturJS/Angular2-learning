import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { LoginPage } from './login-page';
import { CoursesPage } from './courses-page';
import { EditCoursePage } from './edit-course-page';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'courses',
    component: CoursesPage
  },
  {
    path: 'courses/:id',
    component: EditCoursePage
  },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about',
    component: 'About',
    resolve: {
      'yourData': DataResolver
    }},
  { path: '**',    component: NoContent },
];
