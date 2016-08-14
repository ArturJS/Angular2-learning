/**
 * Created by Артур on 31.07.2016.
 */
import { Component } from '@angular/core';
import { SearchCourse } from './search-course';
import { CourseItem } from './course-item';
import { Course } from '../entities/course';
import { FilterPipe } from './filter-pipe/filter.pipe';

@Component({
  selector: 'courses-page',
  directives: [ SearchCourse, CourseItem ],
  templateUrl: './courses-page.html',
  styleUrls: ['./courses-page.scss'],
  pipes: [ FilterPipe ]
})

export class CoursesPage {
  courseItems : Course[];
  searchText : string;
  constructor(){
    this.courseItems = [
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
    ];
  }

  filterCourseItems(searchText : string) : void {
    this.searchText = searchText;
  }
}
