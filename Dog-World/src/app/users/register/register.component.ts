import { Component, OnInit } from '@angular/core';
import { faLock, faEnvelope, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faEnvelope = faEnvelope;
  faUser = faUser;
  faLock = faLock;
  faVenusMars = faVenusMars;
}
