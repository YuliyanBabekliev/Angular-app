import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/shared/interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  private baseUrl = "http://localhost:8080/api/v1/comments";

  
  loadComments():Observable<IComment[]>{
    return this.http.get<IComment[]>(`${this.baseUrl}`, {withCredentials: true});
  }

  saveComment(data:any){
    return this.http.post<IComment>(`${this.baseUrl}`, data, {withCredentials: true});
  }
}
