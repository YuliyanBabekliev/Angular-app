import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDog } from 'src/app/shared/interfaces/dog';


@Injectable({
  providedIn: 'root'
})
export class DogService {


  private baseUrl = "http://localhost:8080/api/v1/dogs";

  constructor(private http: HttpClient) { }

  loadDog(id: number){
    return this.http.get<IDog>(`http://localhost:8080/api/v1/dogs/${id}`, {withCredentials: true});
  }

  saveDog(data:any){
    return this.http.post<IDog>(`${this.baseUrl}`, data, {withCredentials: true});
  }

  deleteDog(id: number){
    return this.http.delete<IDog>(`${this.baseUrl}/${id}`, {withCredentials: true});
  }
}
