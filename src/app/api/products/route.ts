import { NextResponse } from 'next/server';

// Mock product data - in a real app, this would come from a database
const products = [
  {
    id: '1',
    name: 'Olio Extra Vergine di Oliva',
    price: 24.99,
    image: '/images/products/olive-oil.jpg',
    rating: 5,
    reviewCount: 128,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Pasta Artigianale di Gragnano',
    price: 8.99,
    image: '/images/products/pasta.jpg',
    rating: 4,
    reviewCount: 89,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Parmigiano Reggiano DOP',
    price: 29.99,
    image: '/images/products/parmigiano.jpg',
    rating: 5,
    reviewCount: 156,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Aceto Balsamico di Modena',
    price: 19.99,
    image: '/images/products/balsamic.jpg',
    rating: 4,
    reviewCount: 67,
    isFeatured: false,
  },
  {
    id: '5',
    name: 'Prosciutto di Parma DOP',
    price: 45.99,
    image: '/images/products/prosciutto.jpg',
    rating: 5,
    reviewCount: 92,
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Pomodori San Marzano DOP',
    price: 12.99,
    image: '/images/products/tomatoes.jpg',
    rating: 4,
    reviewCount: 45,
    isFeatured: false,
  },
  {
    id: '7',
    name: 'Pecorino Romano DOP',
    price: 22.99,
    image: '/images/products/pecorino.jpg',
    rating: 4,
    reviewCount: 78,
    isFeatured: false,
  },
  {
    id: '8',
    name: 'Tartufo Nero',
    price: 89.99,
    image: '/images/products/truffle.jpg',
    rating: 5,
    reviewCount: 34,
    isFeatured: true,
  },
  {
    id: '9',
    name: 'Caffè Italiano Premium',
    price: 15.99,
    image: '/images/products/coffee.jpg',
    rating: 4,
    reviewCount: 112,
    isFeatured: false,
  },
];

export async function GET() {
  return NextResponse.json(products);
} 