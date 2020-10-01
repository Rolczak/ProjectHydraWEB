import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rank, RankSelect } from './rank';
@Injectable({
  providedIn: 'root'
})
export class RankService {

  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
   }

   create(rank): Observable<Rank>{
     return this.httpClient.post<Rank>(this.apiServer+'/ranks', JSON.stringify(rank), this.httpOptions);
   }
   getAll(): Observable<Rank[]>{
     return this.httpClient.get<Rank[]>(this.apiServer+'/ranks');
   }
   delete(id): Observable<Rank>{
     return this.httpClient.delete<Rank>(this.apiServer+'/ranks/'+ id,  this.httpOptions);
   }
   getById(id): Observable<Rank>{
     return this.httpClient.get<Rank>(this.apiServer+'/ranks/'+ id);
   }
   update(id, rank):Observable<Rank>{
     return this.httpClient.put<Rank>(this.apiServer+'/ranks/'+ id, JSON.stringify(rank), this.httpOptions);
   }
   getSelectList():Observable<RankSelect[]>{
     return this.httpClient.get<RankSelect[]>(this.apiServer+'/ranks/selectList');
   }
}
