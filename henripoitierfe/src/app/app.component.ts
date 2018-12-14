import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'henripoitierfe';
  basket;
  price = '0';


  constructor() {
    if (!(localStorage.getItem('basket'))) {
      localStorage.setItem('basket', this.basket);
    }
    else {
      localStorage.getItem('basket');
    }

    if (!(localStorage.getItem('price'))) {
      localStorage.setItem('price', this.price);
    }
    else {
      localStorage.getItem('price');
    }

  }
}
