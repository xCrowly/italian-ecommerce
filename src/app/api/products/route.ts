import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  
  const start = (page - 1) * limit;
  const end = start + limit;
  
  const paginatedProducts = products.slice(start, end);
  const totalPages = Math.ceil(products.length / limit);
  
  return NextResponse.json({
    products: paginatedProducts,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: products.length,
      itemsPerPage: limit
    }
  });
} 