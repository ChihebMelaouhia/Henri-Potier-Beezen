import {Book} from '../books/book';

export class Basket {

  private _qteTotal: number;
  private _obj: Book;


  get qteTotal(): number {
    return this._qteTotal;
  }

  set qteTotal(value: number) {
    this._qteTotal = value;
  }

  get obj(): Book {
    return this._obj;
  }

  set obj(value: Book) {
    this._obj = value;
  }
}
