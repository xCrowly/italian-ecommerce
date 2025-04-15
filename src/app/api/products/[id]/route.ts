import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const product = products.find(p => p.id === context.params.id);
  
  if (!product) {
    return new NextResponse('Product not found', { status: 404 });
  }
  
  return NextResponse.json(product);
} 