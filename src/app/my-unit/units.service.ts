import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserAuthService } from '../shared/user.service';
import { UnitDetails } from './unit';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient, private userService:UserAuthService) { }


  getMyUnit():Observable<UnitDetails>{
    return this.userService.getUserUnit()
    .pipe(switchMap(output => this.httpClient.get<UnitDetails>(this.apiServer+'/Units/'+output.unitId)));
  }
}
