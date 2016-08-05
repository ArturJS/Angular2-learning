/**
 * Created by Artur_Nizamutdinov on 8/5/2016.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'course-item',
  inputs: ['course'],
  templateUrl: './course-item.html',
  styleUrls: ['./course-item.css']
})

export class CourseItem {
  public course : Course;

  /*constructor(title : string, description : string, duration : number, authors : string[]){
    this.title = title;
    this.description = description;
    /!*this.date = date;*!/
    this.duration = duration;
    this.authors = authors;
  }*/
}

export class Course {
  public title : string;
  public description : string;
  /*public date : any;*/
  public duration : number;
  public authors : string[];
}
