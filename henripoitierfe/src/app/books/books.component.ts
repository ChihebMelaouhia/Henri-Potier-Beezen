import {Component, OnInit} from '@angular/core';
import {BooksService} from './books.service';
import {Basket} from '../basket/basket';
import {Book} from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  basket: Basket[] = [];
  ObjBasket: Basket;
  price = 0;
  j;


  tab: any[] = [];
  existe: boolean;

  constructor(public booksService: BooksService) {
  }

  ngOnInit() {
    this.finAllBooks();
  }

  finAllBooks() {
    this.booksService.getAllBooks().subscribe(results => {
      this.books = results;

    });
  }


  addBookInBasket(book) {

    if ((localStorage.getItem('basket')) !== 'undefined') {
      this.tab = JSON.parse(localStorage.getItem('basket'));

      for (var i = 0; i < this.tab.length; i++) {
        if (book.isbn === this.tab[i]._obj.isbn) {
          this.j = i;
          this.existe = true;
          break;
        } else {
          this.existe = false;
        }
      }

      if (this.existe) {
        let t = this.tab[this.j]._qteTotal += 1;
        this.tab[this.j]._qteTotal = t;
        this.tab.splice(this.j, 1, this.tab[this.j]);
        localStorage.setItem('basket', JSON.stringify(this.tab));

        this.price = parseInt(localStorage.getItem("price"), 10);
        this.price += parseInt(this.tab[this.j]._obj.price, 10);
        localStorage.setItem('price', JSON.stringify(this.price));

      } else {
        this.ObjBasket = new Basket();
        this.ObjBasket.obj = book;
        this.ObjBasket.qteTotal = 1;
        this.tab.push(this.ObjBasket);
        localStorage.setItem('basket', JSON.stringify(this.tab));
        /*Prix*/
        this.price = parseInt(localStorage.getItem("price"), 10);
        this.price += parseInt(this.ObjBasket.obj.price, 10);
        localStorage.setItem('price', JSON.stringify(this.price));
      }


    } else {
      this.ObjBasket = new Basket();
      this.ObjBasket.obj = book;
      this.ObjBasket.qteTotal = 1;
      this.basket.push(this.ObjBasket);
      localStorage.setItem('basket', JSON.stringify(this.basket));
      /* Prix */
      this.price = parseInt(localStorage.getItem("price"), 10);
      this.price += parseInt(this.ObjBasket.obj.price, 10);
      localStorage.setItem('price', JSON.stringify(this.price));
    }

    return this.basket;
  }


}

