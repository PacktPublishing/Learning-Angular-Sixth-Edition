import { Service, signal } from '@angular/core';

interface CartItem {
  productId: number;
  qty: number;
}

@Service()
export class Cart {
  readonly cart = signal<CartItem[]>([]);

  add(productId: number, qty: number) {
    this.cart.update(cart => [
      ...cart,
      { productId, qty }
    ]);
  }
}
