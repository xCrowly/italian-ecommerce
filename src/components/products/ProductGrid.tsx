"use client";

import { Button } from "../../components/ui/Button";
import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const { addToCart } = useCart();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-primary">
            I Nostri Prodotti
          </h2>
          <Link
            href="/products"
            className="text-accent-terracotta hover:underline flex items-center"
          >
            Vedi tutti <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square bg-white relative overflow-hidden">
                  <div className="relative w-full h-full p-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="auto"
                      priority
                      className="object-cover"
                    />
                  </div>
                  {product.isFeatured && (
                    <div className="absolute top-2 right-2 bg-accent-terracotta text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg text-foreground mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < product.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/70 ml-2">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">
                      €{product.price.toFixed(2)}
                    </span>
                    <Button
                      className="text-sm p-2 bg-primary hover:bg-primary/90 text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        });
                      }}
                    >
                      Aggiungi
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
