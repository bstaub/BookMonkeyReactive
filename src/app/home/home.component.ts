import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'bm-home',
  template: `
    <div class="ui container two column grid">
      <div class="ui container column">
        <h1>Home</h1>
        <p>Hier ist der BookMonkey</p>
        <button routerLink="/books" class="ui red button">Buchliste ansehen
        <i class="right arrow icon"></i>
        </button>
      </div>
      <bm-search (bookSelected)="bookSelected($event)" class="column"></bm-search>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  bookSelected(book: Book) {
    this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
  }

}
