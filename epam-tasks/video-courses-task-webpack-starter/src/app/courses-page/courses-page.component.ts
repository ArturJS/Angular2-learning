/**
 * Created by Артур on 31.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import { SearchCourse } from './search-course';
import { CourseItem } from './course-item';
import { Course } from '../entities/course';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { CoursesService } from './courses-service/courses.service';

@Component({
  selector: 'courses-page',
  directives: [ SearchCourse, CourseItem ],
  templateUrl: './courses-page.html',
  styleUrls: ['./courses-page.scss'],
  pipes: [ FilterPipe ],
  providers: [ CoursesService ]
})

export class CoursesPage implements OnInit {
  courseItems : Course[];
  searchText : string;
  constructor(private coursesService: CoursesService){

  }

  ngOnInit(){
    this.coursesService
        .getAll()
        .then(courses => this.courseItems = courses);
  }

  filterCourseItems(searchText : string) : void {
    this.searchText = searchText;
  }
}
