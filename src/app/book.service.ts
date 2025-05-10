import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('/opds');
  }

  getBookByIsbn(kodeOpd: string): Observable<Book> {
    return this.httpClient.get<Book>(`/opds/${kodeOpd}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`/opds`,
      book,
      httpOptions
    );
  }

  editBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`/opds/${book.kodeOpd}`,
      book,
      httpOptions
    );
  }

  deleteBook(kodeOpd: string): Observable<any> {
    return this.httpClient.delete<any>(`/opds/${kodeOpd}`);
  }

}
