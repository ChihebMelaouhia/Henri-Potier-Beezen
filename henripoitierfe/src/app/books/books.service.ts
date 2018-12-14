import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  base_url: string = "http://localhost:8080/books";

  constructor(public http: HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.base_url+ "/all");
  }



}
