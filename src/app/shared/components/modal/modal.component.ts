import { Component, Output, EventEmitter } from '@angular/core';

import { CartService } from '@core/internalService/cart.service';
import { gamesResponse } from '@models/games/games.model'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  public gameSelect: gamesResponse[] = [];
  public priceTotal: number = 0;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$
    .subscribe(data => {
      // TODO: avoid subscribe callbacks
      this.gameSelect = data;
      this.priceTotal = this.gameSelect.reduce((acum, elm) => acum + Number(elm.cheapest) ,0);
    })
  }

  onCloseModal() {
    this.closeModal.emit();
  };
  deleteGame(i: number) {
    this.priceTotal = this.gameSelect.reduce((acum, elm) => acum + Number(elm.cheapest) ,0);
    this.cartService.deleteGame(i);
  }

}
