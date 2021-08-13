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
      return this.http.get<IDog[]>(`${this.baseUrl}`, {withCredentials: true} );
   }

}
