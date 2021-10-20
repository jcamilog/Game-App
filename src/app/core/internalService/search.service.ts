// TODO: Sort imports
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search: string = '';
  private searchs = new BehaviorSubject<string>('');

  newSearchs$ = this.searchs.asObservable();

  constructor() { }

  searchGame(value: string){
    this.search = value;
    this.searchs.next(this.search);
  };
}
