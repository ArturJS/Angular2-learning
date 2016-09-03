import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login-page';
import { CoursesPage } from './pages/courses-page';
import { EditCoursePage } from './pages/edit-course-page';
import { NoContent } from './pages/no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',            component: LoginPage },

  { path: 'login',       component: LoginPage },

  { path: 'courses',     component: CoursesPage },

  { path: 'courses/:id', component: EditCoursePage },
  
  { path: '**',          component: NoContent },
];
