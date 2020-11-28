import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAuthService } from '../shared/user.service';
import {GradeVM} from './grade';

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
  constructor(private httpClient:HttpClient,
              private userService:UserAuthService) { }

  getMyGrades():Observable<GradeVM[]>{
    return this.httpClient.get<GradeVM[]>(this.apiServer+'/grades/user/'+this.userService.getUserId());
  }
}
