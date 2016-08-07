/**
 * Created by Артур on 31.07.2016.
 */
import { Component } from '@angular/core';
import { SearchCourse } from './search-course';
import { CourseItem } from './course-item';
import { Course } from '../entities/course';

@Component({
  selector: 'courses-page',
  directives: [ SearchCourse, CourseItem ],
  templateUrl: './courses-page.html',
  styleUrls: ['./courses-page.css']
})

export class CoursesPage {
  courseItems : Course[];
  constructor(){
    var abc : any = {
      title: '123',
      description: 'lorem ipsum...',
      date: new Date(),
      duration: 123,
      authors: ['123asd'],
      };

    this.courseItems = [
      new Course(abc),
      new Course(abc),
      new Course(abc),
    ];
  }
}
