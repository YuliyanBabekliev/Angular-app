import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IDog } from 'src/app/shared/interfaces/dog';
import { TokenStorageService } from '../token-storage/token-storage.service';

const AUTH_API = 'http://localhost:8080/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = this.tokenService.getToken();
  indexPage: boolean = true;
  homePage: boolean = false;

  constructor(private http: HttpClient,
    private router: Router,
    private tokenService: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, {withCredentials: true});
  }

  register(username: string, email: string, password: string, gender: string, favouriteDogs: IDog[], comments: string[]): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
    username, email, password, gender
    }, {withCredentials:true});
  }

  logout(){
    window.sessionStorage.clear();
    window.location.reload();
    this.router.navigate(['/']);
  }


}
