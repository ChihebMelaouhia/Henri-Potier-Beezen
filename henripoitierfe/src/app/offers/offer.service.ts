import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {


  base_url: string = "http://localhost:8080/offers"

  constructor(public http: HttpClient) { }

  getOffers() {
    return this.http.get( this.base_url+ "/all")
  }

  getOneOffers() {
    return this.http.get(this.base_url+ "/getone?id=percentage");
  }
}
