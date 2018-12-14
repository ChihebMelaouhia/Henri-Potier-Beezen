export class Book {



  private _isbn: string;
  private _title: string;
  private _price: string;
  private _cover: string;
  private _synopsis: string[];
  private _qte:number;

  get qte(): number {
    return this._qte;
  }

  set qte(value: number) {
    this._qte = value;
  }

  set isbn(value: string) {
    this._isbn = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get cover(): string {
    return this._cover;
  }

  set cover(value: string) {
    this._cover = value;
  }

  get synopsis(): string[] {
    return this._synopsis;
  }

  set synopsis(value: string[]) {
    this._synopsis = value;
  }
}
