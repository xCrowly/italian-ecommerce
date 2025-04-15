import { NextResponse } from 'next/server';
import { products } from '@/data/products';

// Featured products with real clothing images from remote CDN
const featuredProducts = products.filter(product => product.isFeatured);

export async function GET() {
  return NextResponse.json(featuredProducts);
} 