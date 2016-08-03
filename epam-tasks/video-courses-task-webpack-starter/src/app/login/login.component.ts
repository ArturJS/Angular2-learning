/**
 * Created by Артур on 31.07.2016.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  host: {
    'ngClass': 'wh100'
  },
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  public login: string;
  public password: string;

  constructor (){
  }
}
