import { Component, inject } from '@angular/core';
import { APP_SETTINGS, appSettings } from '../app.settings';
import { ShoppingCart } from '../shopping-cart/shopping-cart';

@Component({
  selector: 'app-header',
  imports: [ShoppingCart],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ]
})
export class Header {
    settings = inject(APP_SETTINGS);
}
