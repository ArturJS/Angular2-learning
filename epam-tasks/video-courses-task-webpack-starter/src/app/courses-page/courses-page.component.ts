/**
 * Created by Артур on 31.07.2016.
 */
import { Component } from '@angular/core';
import { SearchCourse } from './search-course';

@Component({
  selector: 'courses-page',
  directives: [SearchCourse],
  templateUrl: './courses-page.html',
  styleUrls: ['./courses-page.css']
})

export class CoursesPage {
  constructor(){

  }
}
