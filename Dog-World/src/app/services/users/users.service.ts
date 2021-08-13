import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../token-storage/token-storage.service';

const AUTH_API = 'http://localhost:8080/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: IUser | null | undefined = undefined;

  apiURL = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient,
    private tokenStorage: TokenStorageService) { }

    isLogged(): boolean {
    return false;
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.post(AUTH_API + `${id}`, {
      id
    }, {withCredentials: true});
  }

  editUserById(data:any): Observable<any> {

    const id = this.tokenStorage.getUser().id;

    return this.http.put(this.apiURL + `/${id}`, {
      data,
    },{withCredentials: true});
  }


  // login(data: { email: string; password: string }) {
  //   return this.http.post<IUser>(`${this.apiURL}/users/login`, data, { withCredentials: true }).pipe(
  //     tap((user: IUser | null | undefined) => this.user = user)
  //   );
  // }
}

