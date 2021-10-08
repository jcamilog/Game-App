import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { gamesResponse, detailResponse } from './../../models/games/games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }
  getListOFGames(title: string, limit: number): Observable<gamesResponse> {
    return this.http.get<gamesResponse>(`${environment.API}games?title=${title}&limit=${limit}&exact=0`);
  };
  getDetailGame(id: string): Observable<detailResponse>{
    return this.http.get<detailResponse>(`${environment.API}games?id=${id}`);
  };
}
