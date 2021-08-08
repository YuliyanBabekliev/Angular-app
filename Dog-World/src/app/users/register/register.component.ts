import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faEnvelope, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Gender } from 'src/app/shared/interfaces/gender';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  genderSelected!: string;
  gender: Gender[] | undefined;
  errorMessage = '';

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.gender = [
      { 
        id: 1,
        name: "Male"
      },
      {
        id: 2,
        name: "Female"
      },
      {
        id: 3,
        name: "Other"
      }
    ]
  }

  faEnvelope = faEnvelope;
  faUser = faUser;
  faLock = faLock;
  faVenusMars = faVenusMars;

  onSubmit(form: NgForm): void {
    const values = form.value;
    const username = form.value.username;
    const email  = form.value.email;
    const password = form.value.password;
    const dogs: string[] = [];
    const comments: string[] = [];
    //TODO implement gender
    console.log(username);
    console.log(this.genderSelected);

    this.authService.register(username, email, password, this.genderSelected, dogs, comments).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log(this.errorMessage)
      }
    );
    this.router.navigate(['/login']);
    alert('User register successfully! Now you have to login.')
  }
}
