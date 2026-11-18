import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';
import { Books } from './books/books';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductList, Books],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
}
