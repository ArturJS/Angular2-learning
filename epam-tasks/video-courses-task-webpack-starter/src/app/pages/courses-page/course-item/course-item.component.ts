/**
 * Created by Artur_Nizamutdinov on 8/5/2016.
 */
import { Component, Input } from '@angular/core';
import { Course } from '../../../entities/course';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.html',
  styleUrls: ['./course-item.scss'],
})

export class CourseItem {
  @Input() course : Course;

}


