import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from './unit'
@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Unit[]>{
    return this.httpClient.get<Unit[]>(this.apiServer+'/units');
  }
  getById(id): Observable<Unit>{
    return this.httpClient.get<Unit>(this.apiServer+'/units/'+id);
  }
  create(unit): Observable<Unit>{
    return this.httpClient.post<Unit>(this.apiServer+'/units',JSON.stringify(unit), this.httpOptions);
  }
  update(id, unit): Observable<Unit>{
    return this.httpClient.put<Unit>(this.apiServer+'/units/'+id,JSON.stringify(unit), this.httpOptions);
  }
}
