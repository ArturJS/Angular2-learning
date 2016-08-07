/**
 * Created by Artur_Nizamutdinov on 8/5/2016.
 */
import { Component } from '@angular/core';
import { Course } from '../../entities/course';

@Component({
  selector: 'course-item',
  inputs: ['course'],
  templateUrl: './course-item.html',
  styleUrls: ['./course-item.css']
})

export class CourseItem {
  public course : Course;

}


