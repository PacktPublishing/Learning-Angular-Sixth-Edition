import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, input, output, signal, computed, linkedSignal } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  readonly product = input.required<Product>();
  readonly added = output<number>();
  readonly qty = signal(1);
  readonly cost = computed(() => {
    return this.product().price * this.qty();
  });
  readonly selectedColor = linkedSignal(() => {
    const colors = this.product().colors;
    if (!colors) return '';
    return colors[0];
  });

  add() {
    this.qty.update(q => q + 1);
  }

  subtract() {
    if (this.qty() === 1) return;
    this.qty.update(q => q - 1);
  }

}
