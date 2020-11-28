import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAuthService } from '../shared/user.service';
import { LessonsVM } from './lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient:HttpClient, private userService:UserAuthService) { }

  getMyLessons(): Observable<LessonsVM[]>{
    return this.httpClient.get<LessonsVM[]>(this.apiServer+'/classes/user/'+this.userService.getUserId());
  }

}
