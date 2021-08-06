import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDog } from 'src/app/shared/interfaces/dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

 
  private baseUrl = "http://localhost:8080/api/v1/dogs";
  constructor(private http: HttpClient) {
   }

   getDogs(): Observable<IDog[]>{
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  
  
    headers.append('GET', 'POST');
    headers.append('Access-Control-Allow-Credentials', 'true');
      return this.http.get<IDog[]>(`${this.baseUrl}`, {withCredentials: true} );
   }

}
