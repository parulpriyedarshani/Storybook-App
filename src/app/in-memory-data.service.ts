import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 11, name: 'The Nutcracker'},
      { id: 12, name: 'The Princess And Pauper'},
      { id: 13, name: 'Rapunzel'},
      { id: 14, name: 'Magic Of The Pegasus'},
      { id: 15, name: 'Thumbelina'},
      { id: 16, name: 'Rumpelstiltskin'},
      { id: 17, name: 'Cindrella'},
      { id: 18, name: 'The Little Mermaid'},
      { id: 19, name: 'Mermaidia'},
      { id: 21, name: 'Puss In Boots'},
      { id: 22, name: 'The Frog Princess'},
      { id: 23, name: 'Fairytopia'},
      { id: 24, name: 'Aladdin'},
      { id: 25, name: 'Goldilocks And The Bears'},
      { id: 26, name: 'The Island Princess'},
      { id: 27, name: 'Alice In Wonderland'},
      { id: 28, name: 'The Twelve Princesses'},
      { id: 29, name: 'Heidi'},
      { id: 30, name: 'The Kings New Clothes'},
      { id: 31, name: 'The Three Musketeers'},
      { id: 32, name: 'Snow White'},
      { id: 33, name: 'The Diamond Castle'},
      { id: 34, name: 'A Christmas Carol'},
      { id: 35, name: 'Sleeping Beauty'},
      { id: 36, name: 'The Secret Door'},
      { id: 37, name: 'Beauty And The Beast'},
  ];
    return {books};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
