import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classes, ClassesVM } from "./classes";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private apiServer = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private httpClient: HttpClient) { }

  getClassesForUser(userId): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(this.apiServer+'/classes/user/'+userId);
  }
  getAll(): Observable<ClassesVM[]>{
    return this.httpClient.get<ClassesVM[]>(this.apiServer+'/classes');
  }
  create(classes): Observable<Classes>{
    return this.httpClient.post<Classes>(this.apiServer+'/classes', JSON.stringify(classes), this.httpOptions);
  }
  update(id, classes): Observable<Classes>{
    return this.httpClient.put<Classes>(this.apiServer+'/classes/'+id, JSON.stringify(classes), this.httpOptions);
  }

}
