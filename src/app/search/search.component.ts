import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../shared/book';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import {BookStoreService} from '../shared/book-store.service';


@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  isLoading = false;
  foundBooks: Book[] = [];

  @Output()
  bookSelected = new EventEmitter<Book>();
  keyup = new EventEmitter<string>();

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    // this.keyup.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   tap(() => console.log('Test debouncTime, distinctUntilChaned: ')))
    //   .subscribe(value => console.log(value));

    this.keyup.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
      tap(() => this.isLoading = false)
    )
      .subscribe(books => this.foundBooks = books);

  }

}
