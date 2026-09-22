import { Component } from '@angular/core';
import { PRODUCTS } from '../product';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products = PRODUCTS;
  selectedProduct!: Product;
}
