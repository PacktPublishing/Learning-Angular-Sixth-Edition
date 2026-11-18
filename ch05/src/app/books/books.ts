import { Component, inject } from '@angular/core';
import { Favorites } from '../favorites';
import { Products } from '../products';

@Component({
  imports: [],
  selector: 'app-books',
  styleUrl: './books.scss',
  templateUrl: './books.html',
  providers: [
    { provide: Products, useClass: Favorites }
  ]
})
export class Books {
    readonly books = inject(Products).getProducts();
}
