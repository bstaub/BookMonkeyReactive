import { Injectable } from '@angular/core';
import {Book, Thumbnail} from './book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {retry, map, catchError} from 'rxjs/operators';
// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';

import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';

  // books: Book[];

  constructor(private http: HttpClient) {


    // this.books = [
    //   new Book(
    //     '9783864903571',
    //     'Angular',
    //     ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
    //     new Date(2017, 3, 1),
    //     'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab Angular 4, inklusive NativeScript und Redux',
    //     5,
    //     [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
    //     'Mit Angular setzen Sie auf ein modernes und modulares...'
    //   ),
    //   new Book(
    //     '9783864901546',
    //     'AngularJS',
    //     ['Philipp Tarasiewicz', 'Robin Böhm'],
    //     new Date(2014, 5, 29),
    //     'Eine praktische Einführung',
    //     5,
    //     [new Thumbnail('https://ng-buch.de/cover1.jpg', 'Buchcover')],
    //     'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...'
    //   )
    // ];

  }

  // getAll() {
  //   console.table(this.books);
  //   return this.books;
  // }
  //
  // getSingle(isbn) {
  //   return this.books.find(book => book.isbn === isbn);  // gibt das Buch auf welches die isbn Nummer matched zurück!
  // }


  getAll(): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
          .map(rawBook => BookFactory.fromObject(rawBook)),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get<BookRaw>(`${this.api}/book/${isbn}`)
      .pipe(
        retry(3),
        map(rawBook => BookFactory.fromObject(rawBook)),
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }


}
