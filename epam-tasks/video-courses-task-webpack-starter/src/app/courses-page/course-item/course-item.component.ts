/**
 * Created by Artur_Nizamutdinov on 8/5/2016.
 */
import { Component } from '@angular/core';
import { Course } from '../../entities/course';
import { DurationPipe } from '../duration-pipe/duration.pipe';

@Component({
  selector: 'course-item',
  inputs: ['course'],
  templateUrl: './course-item.html',
  styleUrls: ['./course-item.css'],
  pipes: [ DurationPipe ]
})

export class CourseItem {
  public course : Course;

}


