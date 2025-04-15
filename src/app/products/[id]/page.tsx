"use client";

import { useQuery } from "@tanstack/react-query";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  isFeatured?: boolean;
}

// Fetch single product
const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`/api/products/${id}`);
  if (!res.ok) {
    throw new Error('Product not found');
  }
  return res.json();
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { data: product, isLoading, isError } = useQuery<Product>({
    queryKey: ["product", resolvedParams.id],
    queryFn: () => fetchProduct(resolvedParams.id),
  });

  const { addToCart } = useCart();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-foreground">Caricamento...</div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Prodotto non trovato</h1>
        <Link href="/products">
          <Button className="flex items-center gap-2">
            <ArrowLeft size={20} />
            Torna ai prodotti
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link href="/products" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Torna ai prodotti
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            {product.isFeatured && (
              <div className="absolute top-4 right-4 bg-accent-terracotta text-white text-sm font-bold px-3 py-1 rounded">
                In Evidenza
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < product.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-foreground/70 ml-2">
                ({product.reviewCount} recensioni)
              </span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-primary mb-6">
              €{product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-foreground/80 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <Button
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-6 text-lg w-full md:w-auto"
              onClick={() => addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })}
            >
              <ShoppingCart size={24} />
              Aggiungi al carrello
            </Button>

            {/* Additional Info */}
            <div className="mt-8 border-t border-border pt-8">
              <h2 className="font-medium text-foreground mb-4">Dettagli del prodotto:</h2>
              <ul className="space-y-2 text-foreground/70">
                <li>• Prodotto in Italia</li>
                <li>• Materiali di alta qualità</li>
                <li>• Spedizione gratuita</li>
                <li>• Reso gratuito entro 30 giorni</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 