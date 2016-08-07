/**
 * Created by Артур on 07.08.2016.
 */
export class Course {
  public title : string;
  public description : string;
  public date : Date;
  public duration : number;
  public authors : string[];

  constructor({title, description, date, duration, authors}){
    this.title = title;
    this.description = description;
    this.date = date;
    this.duration = duration;
    this.authors = authors;
  }
}
