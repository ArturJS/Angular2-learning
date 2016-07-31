import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Login } from './login';
import { Courses } from './courses';
import { EditCourse } from './edit-course';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  {
    path: '',
    component: Login
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'courses',
    component: Courses
  },
  {
    path: 'courses/:id',
    component: EditCourse
  },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about',
    component: 'About',
    resolve: {
      'yourData': DataResolver
    }},
  { path: '**',    component: NoContent },
];
