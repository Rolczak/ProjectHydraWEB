import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserVM, UserDetails} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<UserVM[]>{
    return this.httpClient.get<UserVM[]>(this.apiServer+'/appuser');
  }

  getById(id): Observable<UserDetails>{
    return this.httpClient.get<UserDetails>(this.apiServer+'/appuser/'+ id);
  }

  update(id, user):Observable<UserDetails>{
    return this.httpClient.put<UserDetails>(this.apiServer+'/appuser/'+id, JSON.stringify(user), this.httpOptions);
  }

  editProfile(id, user):Observable<UserDetails>{
    return this.httpClient.put<UserDetails>(this.apiServer+'/userProfile/'+id, JSON.stringify(user), this.httpOptions);
  }

  getForSelect():Observable<UserVM[]>{
    return this.httpClient.get<UserVM[]>(this.apiServer+'/appuser/selectList');
  }
}
