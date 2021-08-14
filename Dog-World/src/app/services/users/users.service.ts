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
  deleteUrl = 'http://localhost:8080/api/v1/user';

  constructor(private http: HttpClient,
    private tokenStorage: TokenStorageService) { }

    isLogged(): boolean {
    return false;
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.get(this.apiURL + `/${id}`, {
    });
  }

  editUserById(data:any): Observable<any> {

    const id = this.tokenStorage.getUser().id;

    return this.http.put(this.apiURL + `/${id}`, {
      data,
    },{withCredentials: true});
  }
}

