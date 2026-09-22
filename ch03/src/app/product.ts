type Category = 'books' | 'electronics';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: 'JavaScript for Beginners',
        price: 29.99,
        description: 'A practical guide to learning JavaScript from scratch.',
        category: 'books',
        image: 'product-1.png',
    },
    {
        id: 2,
        title: 'Modern Web Design',
        price: 39.5,
        description: 'Explore modern UX principles and responsive web design patterns.',
        category: 'books',
        image: 'product-2.png',
    },
    {
        id: 3,
        title: 'Noise Cancelling Headphones',
        price: 199.99,
        description: 'Wireless headphones with immersive sound and all-day comfort.',
        category: 'electronics',
        image: 'product-3.png',
    },
    {
        id: 4,
        title: 'Smart Fitness Watch',
        price: 249.0,
        description: 'Track workouts, heart rate, sleep, and notifications in style.',
        category: 'electronics',
        image: 'product-4.png',
    },
    {
        id: 5,
        title: 'The Pragmatic Programmer',
        price: 34.75,
        description: 'A timeless reference for writing better software and growing as a developer.',
        category: 'books',
        image: 'product-5.png',
    },
];
