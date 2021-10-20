// TODO: Sort imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// TODO: You should use short imports
import { environment } from './../../../environments/environment';

import { gamesResponse, detailResponse } from './../../models/games/games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }
  // TODO: space between methods (use prettier)
  getListOFGames(title: string, limit: number): Observable<gamesResponse> {
    // TODO: should use URLParams by Angular
    return this.http.get<gamesResponse>(`${environment.API}games?title=${title}&limit=${limit}&exact=0`);
  };
  // TODO: space between methods (use prettier)
  getDetailGame(id: string): Observable<detailResponse>{
    // TODO: should use URLParams by Angular
    return this.http.get<detailResponse>(`${environment.API}games?id=${id}`);
  };
}
