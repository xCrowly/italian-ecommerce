import { NextResponse } from 'next/server';

// Featured products with real clothing images from remote CDN
const products = [
  {
    id: '1',
    name: 'Elegante Giacca in Pelle Italiana',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    reviewCount: 128,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Camicia di Lino Premium',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60',
    rating: 4,
    reviewCount: 89,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Abito Sartoriale Italiano',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    reviewCount: 156,
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Pantaloni in Lana Vergine',
    price: 145.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    reviewCount: 92,
    isFeatured: true,
  },
  {
    id: '8',
    name: 'Cappotto in Lana Merino',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    reviewCount: 34,
    isFeatured: true,
  },
];

export async function GET() {
  return NextResponse.json(products);
} 