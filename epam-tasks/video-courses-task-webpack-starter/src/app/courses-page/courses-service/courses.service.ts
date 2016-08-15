/**
 * Created by Artur_Nizamutdinov on 8/15/2016.
 */
import { Injectable } from '@angular/core';
import { Course } from '../../entities/course';
@Injectable()
export class CoursesService {
  getAll() {
    return Promise.resolve([//todo fix mock data to http implementation
      new Course({
        id: 1,
        title: 'Course 1',
        description: 'lorem ipsum...',
        date: new Date(),
        duration: 133,
        authors: ['123asd'],
      }),
      new Course({
        id: 2,
        title: 'Course 2',
        description: 'lorem ipsum...',
        date: new Date(),
        duration: 60,
        authors: ['123asd'],
      }),
      new Course({
        id: 3,
        title: 'Course qwe',
        description: 'lorem ipsum...',
        date: new Date(),
        duration: 0,
        authors: ['123asd'],
      }),
      new Course({
        id: 4,
        title: 'Course 3',
        description: 'lorem ipsum...',
        date: new Date(),
        duration: 12345,
        authors: ['123asd'],
      }),
      new Course({
        id: 5,
        title: 'Course 4',
        description: 'lorem ipsum...',
        date: new Date(),
        duration: 130,
        authors: ['123asd'],
      }),
    ]);
  }
}
