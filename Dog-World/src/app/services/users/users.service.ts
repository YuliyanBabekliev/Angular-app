import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import {tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: IUser | null | undefined = undefined;

  apiURL = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) { }

    isLogged(): boolean {
    return false;
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.post(AUTH_API + `${id}`, {
      id
    }, {withCredentials: true});
  }


  // login(data: { email: string; password: string }) {
  //   return this.http.post<IUser>(`${this.apiURL}/users/login`, data, { withCredentials: true }).pipe(
  //     tap((user: IUser | null | undefined) => this.user = user)
  //   );
  // }
}

