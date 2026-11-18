import { Component, inject } from '@angular/core';
import { Products } from '../products';
import { Cart } from '../cart';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss',
})
export class ShoppingCart {
  readonly products = inject(Products).getProducts();
  readonly items = inject(Cart).cart;
}
