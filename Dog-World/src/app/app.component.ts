import { Component, Injectable } from '@angular/core';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
  }


  title = 'Dog-World';
  faEnvelope = faEnvelope;
}
