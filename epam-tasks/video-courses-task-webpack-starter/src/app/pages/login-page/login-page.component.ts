/**
 * Created by Артур on 31.07.2016.
 */
import {Component} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage {
  private loginForm : FormGroup;

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
