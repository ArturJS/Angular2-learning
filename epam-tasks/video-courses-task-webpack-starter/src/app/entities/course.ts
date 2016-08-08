/**
 * Created by Артур on 07.08.2016.
 */
export class Course {
  public id : string;
  public title : string;
  public description : string;
  public date : Date;
  public duration : number;
  public authors : string[];

  constructor({id, title, description, date, duration, authors}){
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.duration = duration;
    this.authors = authors;
  }
}
