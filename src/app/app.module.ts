import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BookFormComponent } from './book-form/book-form.component';
import {DateValueAccessorModule} from 'angular-date-value-accessor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    SearchComponent,
    BookFormComponent
  ],
  imports: [
    SuiModule, BrowserModule, AppRoutingModule, HttpClientModule, DateValueAccessorModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
