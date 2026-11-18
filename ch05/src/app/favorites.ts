import { Service, signal } from '@angular/core';
import { Products } from './products';

@Service()
export class Favorites extends Products {
    override getProducts() {
        const data = super.getProducts();
        return signal(data().filter(p => 
            p.category === 'books'
        ));
    }
}
