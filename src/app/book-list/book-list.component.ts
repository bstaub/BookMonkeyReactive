import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Book, Thumbnail } from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];
  // @Output() showDetailEvent = new EventEmitter<Book>(); // vom Typ Book
  constructor(private bs: BookStoreService) { }

  ngOnInit() {
   this.books = this.bs.getAll();
  }

  // showDetails(book: Book) {
  //   this.showDetailEvent.emit(book); // sobald das Buch angeklickt wird, wird in parent Komponente via EventEmitter<Book> übergeben, der Callback (showDetailsEvent) wird in Parent Komponente platziert!
  // }


}
