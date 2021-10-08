import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { GamesService } from '@core/services/games.service';
import { detailResponse } from '@models/games/games.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  public detail: detailResponse | null = null;
  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.detailGame(id);
    });
  }

  detailGame(id: string): void {
    this.gamesService.getDetailGame(id)
    .subscribe( detail  => {
      this.detail = detail;
    })
  }
  return() {
    this.router.navigate(['/home'])
  }

}
