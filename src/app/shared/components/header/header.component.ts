import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { SearchService } from '@core/internalService/search.service';
import { CartService } from '@core/internalService/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeMenu: boolean = false;
  public searchFiel = new FormControl();
  public activeModal: boolean = false;
  public contGames: number = 0;
  constructor(
    private searchService: SearchService,
    private cartService: CartService
  ) {
    this.cartService.cart$
    .subscribe(data => {
      this.contGames = data.length;
    })
   };

  ngOnInit(): void {
    this.searchFiel.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      this.searchService.searchGame(value);
    });
  }

  openMenu(): void {
    if(this.activeMenu === false) {
      this.activeMenu = true;
    }else {
      this.activeMenu = false;
    };
  };
  openModal(): void {
    if(this.activeModal === false) {
      this.activeModal = true;
    }else {
      this.activeModal = false;
    }
  };
}
