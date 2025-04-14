interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviewCount: number;
    isFeatured?: boolean;
  }
  
  export const fetchFeaturedProducts = async (): Promise<Product[]> => {
    // In a real app, this would fetch from your API
    // For now, using mock data that matches your JSON structure
    const res = await fetch('/api/products/featured');
    return res.json();
  };