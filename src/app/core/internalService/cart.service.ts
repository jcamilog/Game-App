import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { gamesResponse } from './../../models/games/games.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private game: gamesResponse[] = [];
  private cart = new BehaviorSubject<gamesResponse[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(game: gamesResponse) {
    const info = this.game.some(item => item.gameID === game.gameID)
    if(!info) {
      this.game = [...this.game, game];
      this.cart.next(this.game);
    }
  };
  deleteGame(i: number) {
    this.game.splice(i,1);
    this.cart.next(this.game);
  }
}
