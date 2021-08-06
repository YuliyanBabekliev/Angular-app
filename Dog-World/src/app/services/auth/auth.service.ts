import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated!: boolean;
  indexPage: boolean = true;
  homePage: boolean = false;

  setIsAuthenticated(): void{
    this.isAuthenticated = true;
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, {withCredentials: true});
  }

  register(username: string, email: string, password: string, gender: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
    username, email, password, gender
    }, {withCredentials:true});
  }

  logout(){
    this.isAuthenticated = false;
    window.sessionStorage.clear();
  }


}
