/**
 * Created by Артур on 31.07.2016.
 */
import { Component,
         OnInit,
         OnDestroy
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Course } from '../../entities/course';
import { CoursesService } from '../../services/courses-service/courses.service';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'edit-course-page',
  templateUrl: './edit-course-page.html',
  styleUrls: ['./edit-course-page.scss'],
  providers: [ CoursesService ]
})

export class EditCoursePage implements OnInit, OnDestroy {
  private course: Course;
  private subRoute : Subscription;
  private subGetService : Subscription;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.subRoute = this.route.params.subscribe(params => {
      let id = +params['id'];

      this.subGetService = this.coursesService
        .get(id)
        .subscribe(course =>{ console.log(course); return this.course = course;} );

    });
  }

  ngOnDestroy(){
    this.subRoute.unsubscribe();
    this.subGetService.unsubscribe();
  }
}
