import {Component, OnInit} from '@angular/core';
import {OfferService} from '../offers/offer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basketBooks: any[];
  offer;
  tab: any[] = [];
  j;
  price;
  newPrice;
  appliedOffer;


  constructor(public offerService: OfferService) {
  }

  ngOnInit() {
    this.finAllBasketBooks();
    this.price = parseInt(localStorage.getItem('price'), 10);
    this.applyOffer();
  }


  finAllBasketBooks() {
    if ((localStorage.getItem('basket')) !== 'undefined') {
      this.basketBooks = JSON.parse(localStorage.getItem('basket'));
    }
  }

  deleteBook(i,qte,price) {
    this.basketBooks.splice(i, 1);
    this.price -= (price*qte);
    localStorage.setItem('price', JSON.stringify(this.price))
    localStorage.setItem('basket', JSON.stringify(this.basketBooks));
    this.applyOffer();

  }


  applyOffer() {

    if (this.price === 0) {
      this.newPrice = 0;
      this.appliedOffer = 'Aucune';

    }
    else if (this.price > 35) {

      this.offerService.getOffers().subscribe(results => {
        this.offer = JSON.parse(JSON.stringify(results));
        var p = this.offerPercentage(this.offer.offers[0].value);
        var m = this.offerMinus(this.offer.offers[1].value);
        var s = this.offerSlice(this.offer.offers[2].value,this.offer.offers[2].sliceValue);
        this.newPrice= p;
        this.appliedOffer = this.offer.offers[0].type;
        if (m < this.newPrice) {this.newPrice = m; this.appliedOffer = this.offer.offers[1].type;}
        if (s < this.newPrice) {this.newPrice = s; this.appliedOffer = this.offer.offers[2].type;}

      });

    } else {

      this.offerService.getOneOffers().subscribe(results => {
        this.offer = JSON.parse(JSON.stringify(results));
        this.newPrice = this.offerPercentage(this.offer.offers.value);
        this.appliedOffer = this.offer.offers.type;
      });
    }


  }


  offerPercentage(value) {
    return this.price - (value * this.price )/100;
  }

  offerMinus(value) {
    return this.price - value;
  }

  offerSlice(value, sliceValue) {
    return this.price - (this.price / sliceValue) * value;
  }


}
