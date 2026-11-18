import { Component, signal, inject } from '@angular/core';
import { Products } from '../products';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  readonly products = inject(Products).getProducts();
  readonly selected = signal<Product | undefined>(undefined);

  onAdded(qty: number) {
    alert('Product added to the cart! Qty:' + qty);
  }
}
