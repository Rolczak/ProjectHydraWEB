import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Grades } from './grades'

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private apiServer = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Grades[]>{
    return this.httpClient.get<Grades[]>(this.apiServer+'/grades');
  }

  getGradesForUser(userId): Observable<Grades[]>{
    return this.httpClient.get<Grades[]>(this.apiServer+'/grades/user/'+userId);
  }
  create(grade): Observable<Grades>{
    return this.httpClient.post<Grades>(this.apiServer+'/grades', JSON.stringify(grade), this.httpOptions);
  }
}
