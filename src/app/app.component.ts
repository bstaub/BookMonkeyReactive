import { Component } from '@angular/core';
import {Book} from './shared/book';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'BookMonkey BS APP';

  listOn = true;
  detailsOn = false;

  book: Book;  // für Detail Ansicht


  showDetails(detail: Book) {
    this.listOn = false;
    this.detailsOn = true;
    this.book = detail;
  }

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

}
