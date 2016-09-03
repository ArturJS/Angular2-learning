/**
 * Created by Artur_Nizamutdinov on 8/4/2016.
 */
import {
  Component,
  EventEmitter
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'search-course',
  templateUrl: './search-course.html',
  outputs: ['updatedSearchText'],
  styleUrls: ['./search-course.scss']
})

export class SearchCourse {
  public updatedSearchText : EventEmitter<string>;
  private searchForm : FormGroup;

  constructor(fb:FormBuilder) {
    this.searchForm = fb.group({
      searchText: ['']
    });

    this.updatedSearchText = new EventEmitter<string>();
  }

  search(formData) : void {
    this.updatedSearchText.emit(formData.searchText);
  }
}
