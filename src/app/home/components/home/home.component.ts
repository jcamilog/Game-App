import { Component, OnInit } from '@angular/core';

import { SearchService } from '@core/internalService/search.service';
import { CartService } from '@core/internalService/cart.service';
import { GamesService } from '@core/services/games.service';

import { gamesResponse } from '@models/games/games.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public games: gamesResponse[] = [];
  public limit: number = 10;
  public offset: number = 10;
  public progress: boolean = false;
  public dumyCont = [1,2,3,4,5,6,7,8,9,10];
  public search: string = "";
  constructor(
    private gamesService: GamesService,
    private searchService: SearchService,
    private cartService: CartService
  ) { 
  }

  ngOnInit(): void {
    this.searchService.newSearchs$
    .subscribe(value => {
      this.search = value;
      this.getGames();
    });
  }

  getGames(): void {
    this.progress = true;
    this.games = [];
    this.gamesService.getListOFGames(this.search,this.limit)
    .subscribe( games => {
      this.games = this.games.concat(games);
      this.progress = false;
    }, err => {
      console.log(err);
    });
  };

  onScroll(): void {
    this.limit += this.offset;   
    this.getGames();
  }
  addCart(game: gamesResponse): void {
    this.cartService.addCart(game);
  }

}
