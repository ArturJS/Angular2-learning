/**
 * Created by Артур on 31.07.2016.
 */
import { Component,
         OnInit,
         OnDestroy
} from '@angular/core';

import { Course } from '../../entities/course';
import { CoursesService } from '../../services/courses-service/courses.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'courses-page',
  templateUrl: './courses-page.html',
  styleUrls: ['./courses-page.scss'],
  providers: [ CoursesService ]
})

export class CoursesPage implements OnInit, OnDestroy {
  courseItems : Course[];
  searchText : string;
  subGetAllService : Subscription;
  constructor(private coursesService: CoursesService){

  }

  ngOnInit(){
    this.subGetAllService = this.coursesService
        .getAll()
        .subscribe(courses => this.courseItems = courses);
  }

  ngOnDestroy(){
     this.subGetAllService.unsubscribe();
  }

  filterCourseItems(searchText : string) : void {
    this.searchText = searchText;
  }
}
