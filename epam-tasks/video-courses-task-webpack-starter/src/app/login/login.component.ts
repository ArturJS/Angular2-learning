/**
 * Created by Артур on 31.07.2016.
 */
import { Component } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';


@Component({
  selector: 'login',
  host: {
    'ngClass': 'wh100'
  },
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  private loginForm:FormGroup;

  constructor(fb:FormBuilder) {
    this.loginForm = fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doLogin(event) {
    console.dir(this.loginForm.value);
    event.preventDefault();
  }
}
