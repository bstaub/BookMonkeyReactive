import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookFactory} from '../shared/book-factory';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  // @Input()
  // book: Book;
  // @Output() showListEvent = new EventEmitter<any>(); // ist von einem beliebigen Typ

  book: Book = BookFactory.empty();

  constructor(private bs: BookStoreService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;      // mittels ActivatedRoute kann ein URL Parameter ausgelesen werden, welcher im Routefile 'books/:isbn' auf Komponete 'BookDetailsComponent' definiert wurde
    // this.book = this.bs.getSingle(params['isbn']);  // fragt Service an und übergibt die ISBN Nummer
    this.bs.getSingle(params['isbn']).subscribe(b => this.book = b);
  }

  getRating(num: number) {
    return new Array(num);
  }

  // showBookList() {
  //   this.showListEvent.emit();  // Trigger für Parent Komponente um von Detail wieder auf Booklist umzuschalten
  // }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }

}
