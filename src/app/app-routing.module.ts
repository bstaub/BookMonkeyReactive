import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookFormComponent} from './book-form/book-form.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'books', component: BookListComponent},
  {path: 'books/:isbn', component: BookDetailsComponent},
  {path: 'admin', component: BookFormComponent},

];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);
