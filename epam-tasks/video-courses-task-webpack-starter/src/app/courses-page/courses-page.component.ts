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
  styleUrls: ['./courses-page.css'],
  pipes: [ FilterPipe ]
})

export class CoursesPage {
  courseItems : Course[];
  searchText : string;
  constructor(){
    this.courseItems = [
      new Course({
        title: 'Course 1',
        description: 'lorem ipsum...',
        date: new Date(),
        duration: 123,
        authors: ['123asd'],
      }),
      new Course({
        title: 'Course 2',
        description: 'lorem ipsum...',
        date: new Date(),
        duration: 60,
        authors: ['123asd'],
      }),
      new Course({
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
