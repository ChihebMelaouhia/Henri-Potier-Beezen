import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {ErrorComponent} from './error/error.component';
import {BasketComponent} from './basket/basket.component';

const routes: Routes = [
  {path: "",component:BooksComponent},
  {path: "basket",component:BasketComponent},
  {path: "**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
