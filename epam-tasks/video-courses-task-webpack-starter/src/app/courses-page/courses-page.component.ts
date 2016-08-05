/**
 * Created by Артур on 31.07.2016.
 */
import { Component } from '@angular/core';
import { SearchCourse } from './search-course';
import { CourseItem, Course } from './course-item';

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
    console.dir(abc as CourseItem);
    this.courseItems = [
      /*new CourseItem(abc)*/
     /* new CourseItem('123', 'lorem ipsum...', 123, ['123asd'])*/
      abc as Course,
      abc as Course,
      abc as Course,
    ];
  }
}
