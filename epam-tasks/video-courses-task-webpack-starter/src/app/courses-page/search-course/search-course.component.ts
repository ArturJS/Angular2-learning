/**
 * Created by Artur_Nizamutdinov on 8/4/2016.
 */
import {
  Component,
  EventEmitter
} from '@angular/core';

import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'search-course',
  templateUrl: './search-course.html',
  directives:[ FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES ],
  outputs: ['updatedSearchText'],
  styleUrls: ['./search-course.css']
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
