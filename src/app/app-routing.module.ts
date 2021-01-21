import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'books', component: BooksComponent },
  { path: 'detail/:id', component: BookDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
//metadata under @NgModule initializes the router and starts it listening for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
