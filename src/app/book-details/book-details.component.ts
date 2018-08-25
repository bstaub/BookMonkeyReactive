import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  @Input()
  book: Book;
  @Output() showListEvent = new EventEmitter<any>(); // ist von einem beliebigen Typ

  constructor() { }

  ngOnInit() {
  }

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();  // Trigger für Parent Komponente um von Detail wieder auf Booklist umzuschalten
  }

}
