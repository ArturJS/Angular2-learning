/**
 * Created by Артур on 30.07.2016.
 */
import { provideRouter, RouterConfig }  from '@angular/router';

import { Login } from './login/login.component';
import { Courses } from './courses/courses.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'courses',
        component: Courses
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];
